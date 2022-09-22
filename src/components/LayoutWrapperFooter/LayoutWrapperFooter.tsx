/**
 * This is a wrapper component for different Layouts. Footer content should be added to this wrapper.
 */
import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import css from './LayoutWrapperFooter.module.scss';

type TLayoutWrapperFooterProps = {
  className?: string;
};

const LayoutWrapperFooter: React.FC<
  PropsWithChildren<TLayoutWrapperFooterProps>
> = ({ className, children }) => {
  const classes = classNames(css.root, className);

  return <footer className={classes}>{children}</footer>;
};

export default LayoutWrapperFooter;
