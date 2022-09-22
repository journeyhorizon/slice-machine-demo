import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

import css from './ExternalLink.module.scss';

type TExternalLinkProps = {
  className?: string;
  href?: string;
  children?: React.ReactNode;
  typeOpen?: '_blank' | '_self' | '_parent' | '_top';
};

const ExternalLink: React.FC<PropsWithChildren<TExternalLinkProps>> = ({
  className,
  href,
  children,
  typeOpen,
}) => {
  const classes = classNames(css.root, className);

  return (
    <a className={classes} href={href} target={typeOpen}>
      {children}
    </a>
  );
};

export default ExternalLink;
