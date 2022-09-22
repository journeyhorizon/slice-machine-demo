import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import css from './SectionHeroContainer.module.scss';

type TSectionHeroContainerProps = {
  className?: string;
};

const SectionHeroContainer: React.FC<
  PropsWithChildren<TSectionHeroContainerProps>
> = ({ className, children }) => {
  const classes = classNames(css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroImageContainer}>
        <div className={css.content}>{children}</div>
      </div>
    </div>
  );
};

export default SectionHeroContainer;
