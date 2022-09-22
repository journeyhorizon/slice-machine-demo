/**
 * LayoutSideNavigation needs to have 3-4 children:
 * LayoutWrapperTopbar, LayoutWrapperSideNav, LayoutWrapperMain, and possibly LayoutWrapperFooter.
 * SideNavWrapper will be shown aside on Desktop layout and
 * as a sub bar under Topbar on mobile screens.
 */
import classNames from 'classnames';
import React, { JSXElementConstructor } from 'react';
import LayoutWrapperFooter from '../LayoutWrapperFooter/LayoutWrapperFooter';
import LayoutWrapperMain from '../LayoutWrapperMain/LayoutWrapperMain';
import LayoutWrapperMembershipSideNav from '../LayoutWrapperMembershipSideNav/LayoutWrapperMembershipSideNav';
import LayoutWrapperSideNav from '../LayoutWrapperSideNav/LayoutWrapperSideNav';
import LayoutWrapperTopbar from '../LayoutWrapperTopbar/LayoutWrapperTopbar';
import css from './LayoutSideNavigation.module.scss';

type LayoutSideNavigationProps = {
  children: React.ReactNode;
  className?: string;
  rootClassName?: string;
  containerClassName?: string;
};

const prepareChildren = (children: React.ReactNode) => {
  const childrenCount = React.Children.count(children);
  if (!(childrenCount === 3 || childrenCount === 4)) {
    throw new Error(
      `Menu needs to have 3 - 4 children:
      LayoutWrapperTopbar, LayoutWrapperSideNav, and LayoutWrapperMain,
      and optionally LayoutWrapperFooter.`,
    );
  }

  const childrenMap = {} as Record<
    | 'layoutWrapperTopbar'
    | 'layoutWrapperMain'
    | 'layoutWrapperFooter'
    | 'layoutWrapperSideNav',
    React.ReactElement
  >;

  React.Children.forEach(
    children as React.ReactElement[],
    (child: React.ReactElement<any, string | JSXElementConstructor<any>>) => {
      if (child.type === LayoutWrapperTopbar) {
        childrenMap.layoutWrapperTopbar = child;
      } else if (
        [LayoutWrapperSideNav, LayoutWrapperMembershipSideNav].includes(
          child.type as any,
        )
      ) {
        childrenMap.layoutWrapperSideNav = child;
      } else if (child.type === LayoutWrapperMain) {
        // LayoutWrapperMain needs different rootClassName
        const childWithAddedCSS = React.cloneElement(child, {
          rootClassName: css.layoutWrapperMain,
        });
        childrenMap.layoutWrapperMain = childWithAddedCSS;
      } else if (child.type === LayoutWrapperFooter) {
        childrenMap.layoutWrapperFooter = child;
      } else {
        throw new Error(
          `LayoutSideNavigation has an unknown child.
      Only LayoutWrapperTopbar, LayoutWrapperSideNav, LayoutWrapperMain, LayoutWrapperFooter are allowed.`,
        );
      }
    },
  );
  return childrenMap;
};

const LayoutSideNavigation = (
  props: LayoutSideNavigationProps,
): JSX.Element => {
  const { className, rootClassName, containerClassName, children } = props;

  const preparedChildren = prepareChildren(children);
  const classes = classNames(rootClassName || css.root, className);
  const containerClasses = containerClassName || css.container;

  const maybeFooter = preparedChildren.layoutWrapperFooter || null;

  return (
    <div className={classes}>
      {preparedChildren.layoutWrapperTopbar}
      <div className={containerClasses}>
        {preparedChildren.layoutWrapperSideNav}
        {preparedChildren.layoutWrapperMain}
      </div>
      {maybeFooter}
    </div>
  );
};

export default LayoutSideNavigation;
