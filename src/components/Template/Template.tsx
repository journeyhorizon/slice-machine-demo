import classNames from 'classnames';

import css from './Template.module.scss';

type TTemplateProps = {
  className?: string;
};

const Template: React.FC<TTemplateProps> = ({ className }) => {
  const classes = classNames(css.root, className);
  return <div className={classes}></div>;
};

export default Template;
