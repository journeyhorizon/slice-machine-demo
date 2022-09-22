import React, { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

/**
 * A higher order component (HOC) that provides dimensions to the wrapped component as a
 * `dimensions` prop that has the shape `{ width: 600, height: 400}`.
 *
 * @param {React.Component} Component to be wrapped by this HOC
 * @param {Object} options pass in options like maxWidth and maxHeight.
 *
 * @return {Object} HOC component which knows its dimensions
 */

const RENDER_WAIT_MS = 100;
const THROTTLE_WAIT_MS = 200;

export const useDimensions = ({
  elementRef,
  options,
}: {
  elementRef: React.MutableRefObject<HTMLDivElement | null>;
  options?: { [name: string]: any };
}) => {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const handleSetDimensions = () => {
    setDimensions(_ => {
      const { clientWidth, clientHeight } = elementRef.current || {
        clientWidth: 0,
        clientHeight: 0,
      };
      return { width: clientWidth, height: clientHeight };
    });
  };

  const handleWindowResize = throttle(() => {
    window.requestAnimationFrame(() => {
      handleSetDimensions();
    });
  }, THROTTLE_WAIT_MS);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('orientationchange', handleWindowResize);

    const defaultRenderTimeout = window.setTimeout(() => {
      handleSetDimensions();
    }, RENDER_WAIT_MS);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('orientationchange', handleWindowResize);
      window.clearTimeout(defaultRenderTimeout);
    };
  }, []);

  // Dimensions from state (i.e. dimension after previous resize)
  // These are needed for component rerenders
  const { width, height } = dimensions;

  // Current dimensions from element reference
  const { clientWidth, clientHeight } = elementRef.current || {
    clientWidth: 0,
    clientHeight: 0,
  };
  const hasDimensions =
    (width !== 0 && height !== 0) || (clientWidth !== 0 && clientHeight !== 0);

  // clientWidth and clientHeight
  const currentDimensions =
    clientWidth !== 0 && clientHeight !== 0
      ? { width: clientWidth, height: clientHeight }
      : width !== 0 && height !== 0
      ? { width, height }
      : {};

  // lazyLoadWithDimensions HOC needs to take all given space
  // unless max dimensions are provided through options.
  const { maxWidth, maxHeight } = options || {
    maxWidth: undefined,
    maxHeight: undefined,
  };
  const maxWidthMaybe = maxWidth ? { maxWidth } : {};
  const maxHeightMaybe = maxHeight ? { maxHeight } : {};
  const style =
    maxWidth || maxHeight
      ? {
          width: '100%',
          height: '100%',
          ...maxWidthMaybe,
          ...maxHeightMaybe,
        }
      : { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 };

  return {
    hasDimensions,
    dimensions: currentDimensions,
    style,
  };
};

/**
 * A higher order component (HOC) that provides the current viewport
 * dimensions to the wrapped component as a `viewport` prop that has
 * the shape `{ width: 600, height: 400}`.
 */
const WAIT_MS = 100;

export const useViewport = () => {
  const [viewport, setViewport] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  const handleSetViewPort = throttle(() => {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, WAIT_MS);

  useEffect(() => {
    const handleWindowResize = () => {
      handleSetViewPort();
    };
    handleSetViewPort();
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('orientationchange', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('orientationchange', handleWindowResize);
    };
  }, []);

  return {
    width: viewport.width,
    height: viewport.height,
  };
};
