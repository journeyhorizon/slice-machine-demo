import routeConfiguration from '@config/routeConfiguration';
import { pathByRouteName } from '@utils/routes';
import classNames from 'classnames';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import css from './NamedLink.module.scss';

type TNameLinkProps = {
  className?: string;
  rootClassName?: string;
  name: string;
  passHref?: boolean;
  children?: React.ReactNode;
  params?: { [name: string]: string | number | boolean };
  to?: {
    search: string;
  };
  title?: string;
};

const NamedLink: React.FC<PropsWithChildren<TNameLinkProps>> = ({
  className,
  rootClassName,
  name,
  passHref,
  children,
  params,
  to,
  title,
}) => {
  const routes = routeConfiguration;
  const path = pathByRouteName(name, routes, params);
  const queryString = to?.search ? `?${to.search}` : '';

  const classes = classNames(rootClassName || css.root, className);

  return (
    <Link href={`${path}${queryString}`} passHref={passHref}>
      <a className={classes} title={title}>
        {children}
      </a>
    </Link>
  );
};

export default NamedLink;
