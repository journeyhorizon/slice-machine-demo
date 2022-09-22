/**
 * This is a wrapper component for different Layouts.
 * Navigational 'aside' content should be added to this wrapper.
 */
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import css from './LayoutWrapperSideNav.module.scss';
import TabNav, { TabProps } from './TabNav';

type LayoutWrapperSideNavProps = {
  className?: string;
  rootClassName?: string;
  tabs?: TabProps[];
};

const LayoutWrapperSideNav = (
  props: PropsWithChildren<LayoutWrapperSideNavProps>,
): JSX.Element => {
  const { className, rootClassName, children, tabs } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <aside className={classes}>
      {tabs ? (
        <TabNav
          rootClassName={css.tabs}
          tabRootClassName={css.tab}
          tabs={tabs}
        />
      ) : null}
      {children}
    </aside>
  );
};

export default LayoutWrapperSideNav;
