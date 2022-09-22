import { useEffect, useState, useMemo } from 'react';

export const useDisabledScrolling = (disable: boolean) => {
  if (typeof window === 'undefined') return;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (disable) {
      document.body.classList.add('disabledScrolling');
    }

    return () => {
      document.body.classList.remove('disabledScrolling');
    };
  }, [disable]);
};

const DEFAULT_OPTIONS = {
  config: { attributes: true, childList: true, subtree: true },
}

export const useMutationObservable: any = (targetEl: Node, callback: () => {}, options = DEFAULT_OPTIONS) => {
  const [observer, setObserver] = useState<MutationObserver | null>(null);

  useEffect(() => {
    const obs = new MutationObserver(callback);
    setObserver(obs);
  }, [callback, options])

  useEffect(() => {
    if (!observer) return;
    const { config } = options;
    const finalTargetEl = targetEl ? targetEl : document;
    observer.observe(finalTargetEl, config);
    return () => {
      if (observer) {
        observer.disconnect();
      }
    }
  }, [observer, options, targetEl])
}
// Hook
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return windowSize;
};

type InitialState = boolean | (() => boolean)
export const useBoolean = (initialState: InitialState = false) => {
  const [value, setValue] = useState<InitialState>(initialState);
  const callbacks = useMemo(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((prev) => !prev),
    }),
    [],
  )
  return [value, callbacks] as const
};