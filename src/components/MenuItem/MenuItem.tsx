/**
 * MenuItem is part of Menu and specifically a child of MenuContent.
 * MenuItems should have a 'key' prop specified.
 * https://facebook.github.io/react/docs/lists-and-keys.html#keys
 *
 * Example:
 *   <MenuItem key="item 1"><a href="example.com">Click me</a><MenuItem>
 */
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import css from './MenuItem.module.scss';

type TMenuItemProps = {
  className?: string;
};

const MenuItem: React.FC<PropsWithChildren<TMenuItemProps>> = ({
  className,
  children,
}) => {
  const classes = classNames(css.root, className);

  return (
    <li className={classes} role="menuitem">
      {children}
    </li>
  );
};

export default MenuItem;
