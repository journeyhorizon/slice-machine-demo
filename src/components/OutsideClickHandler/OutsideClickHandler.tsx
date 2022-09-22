import classNames from 'classnames';
import React, { PropsWithChildren, useEffect, useRef } from 'react';
import css from './OutsideClickHandler.module.scss';

type TOutsideClickHandlerProps = {
  className?: string;
  onOutsideClick: Function;
  children: React.ReactElement;
};

const OutsideClickHandler: React.FC<
  PropsWithChildren<TOutsideClickHandlerProps>
> = ({ className, onOutsideClick, children }) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const classes = classNames(css.root, className);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClick as any, false);

    return () => {
      document.removeEventListener('mousedown', handleClick as any, false);
    };
  }, []);

  return (
    <div className={classes} ref={nodeRef}>
      {children}
    </div>
  );
};

export default OutsideClickHandler;
