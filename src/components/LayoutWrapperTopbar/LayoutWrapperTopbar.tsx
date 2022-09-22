/**
 * This is a wrapper component for different Layouts.
 * Topbar should be added to this wrapper.
 */
import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import css from './LayoutWrapperTopbar.module.css';

type TLayoutWrapperTopbarProps = {
  className?: string;
};

const LayoutWrapperTopbar: React.FC<
  PropsWithChildren<TLayoutWrapperTopbarProps>
> = ({ className, children }) => {
  const classes = classNames(css.root, className);

  return <div className={classes}>{children}</div>;
};

export default LayoutWrapperTopbar;
