/**
 * MenuContent is a immediate child of Menu component sibling to MenuLabel.
 * Clicking MenuLabel toggles visibility of MenuContent.
 */
import React, { LegacyRef, PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';
import MenuItem from '@src/components/MenuItem/MenuItem';

import css from './MenuContent.module.scss';

type TMenuContentProps = {
  arrowPosition?: number;
  className?: string;
  contentClassName?: string;
  contentRef?: LegacyRef<HTMLDivElement>;
  isOpen?: boolean;
  style?: React.CSSProperties;
  children: any;
  rootClassName?: string;
};

const MenuContent: React.FC<PropsWithChildren<TMenuContentProps>> = ({
  arrowPosition = null,
  children,
  className,
  contentClassName,
  contentRef = null,
  isOpen = false,
  style = {},
  rootClassName,
}) => {
  const openClasses = isOpen ? css.isOpen : css.isClosed;
  const classes = classNames(rootClassName || css.root, className, openClasses);
  const contentClasses = classNames(contentClassName || css.content);

  const arrowPositionStyle: any =
    arrowPosition && style.right != null
      ? { position: 'absolute', right: arrowPosition, top: 0 }
      : { position: 'absolute', left: arrowPosition, top: 0 };

  const arrow = arrowPosition ? (
    <div style={arrowPositionStyle}>
      <div className={css.arrowBelow} />
      <div className={css.arrowTop} />
    </div>
  ) : null;

  React.Children.forEach(children, (child: ReactElement) => {
    if (child && child.type !== MenuItem) {
      throw new Error('All children of MenuContent must be MenuItems.');
    }
    if (child && child.key == null) {
      throw new Error('All children of MenuContent must have a "key" prop.');
    }
  });

  return (
    <div className={classes} ref={contentRef} style={style}>
      {arrow}
      <ul className={contentClasses}>{children}</ul>
    </div>
  );
};

export default MenuContent;
