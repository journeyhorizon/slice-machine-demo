import classNames from 'classnames';

import css from './InfoBox.module.scss';

type TInfoBoxProps = {
  className?: string;
  message: string;
};

const InfoBox: React.FC<TInfoBoxProps> = ({ className, message }) => {
  const classes = classNames(css.root, className);
  return (
    <div className={classes}>
      <p>{message}</p>
    </div>
  );
};

export default InfoBox;
