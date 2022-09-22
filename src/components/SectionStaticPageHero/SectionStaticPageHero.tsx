import classNames from 'classnames';
import React from 'react';
import css from './SectionStaticPageHero.module.scss';

type TSectionStaticPageHeroProps = {
  className?: string;
  title?: string;
  description?: string | React.ReactNode;
};

const SectionStaticPageHero: React.FC<TSectionStaticPageHeroProps> = ({
  className,
  title,
  description,
}) => {
  const classes = classNames(css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>{title}</div>
      <div className={css.description}>{description}</div>
    </div>
  );
};

export default SectionStaticPageHero;
