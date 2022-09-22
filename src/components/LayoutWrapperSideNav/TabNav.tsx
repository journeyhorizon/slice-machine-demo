import classNames from 'classnames';
import React from 'react';
import NamedLink from '../NamedLink/NamedLink';
import css from './TabNav.module.scss';

export type TabProps = {
  className?: string;
  id: string;
  disabled?: boolean;
  text: React.ReactNode;
  selected?: boolean;
  linkProps?: React.ComponentProps<typeof NamedLink>;
};

const Tab = (props: TabProps): JSX.Element => {
  const { className, id, disabled, text, selected, linkProps } = props;
  const linkClasses = classNames(css.link, {
    [css.selectedLink]: selected,
    [css.disabled]: disabled,
  });

  return (
    <div id={id} className={className}>
      <NamedLink {...linkProps} name={linkProps?.name!} className={linkClasses}>
        {text}
      </NamedLink>
    </div>
  );
};

type TabNavProps = {
  className?: string;
  rootClassName?: string;
  tabRootClassName?: string;
  tabs: TabProps[];
};

const TabNav = (props: TabNavProps): JSX.Element => {
  const { className, rootClassName, tabRootClassName, tabs } = props;
  const classes = classNames(rootClassName || css.root, className);
  const tabClasses = tabRootClassName || css.tab;
  return (
    <nav className={classes}>
      {tabs.map((tab, index) => {
        const id = typeof tab.id === 'string' ? tab.id : `${index}`;
        return <Tab key={id} className={tabClasses} {...tab} id={id} />;
      })}
    </nav>
  );
};

export default TabNav;
