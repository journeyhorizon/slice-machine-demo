import classNames from 'classnames';
import css from './IconCloseEye.module.scss';

type TIconCloseEyeProps = {
  className?: string;
  rootClassName?: string;
  size?: 'small';
};

const IconCloseEye: React.FC<TIconCloseEyeProps> = ({
  rootClassName,
  className,
}) => {
  const classes = classNames(rootClassName || css.root, className);

  return (
    <svg 
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.672 3.643L26.89 2.347c.292-.352.575-.713.837-1.093a.717.717 0 00-1.178-.816 14.448 14.448 0 01-23.777 0 .716.716 0 10-1.178.816c.263.38.545.74.837 1.092L.644 3.643a.716.716 0 00.843 1.159l1.906-1.386c.686.69 1.434 1.317 2.235 1.871L4.3 7.114a.716.716 0 001.159.842l1.39-1.911c.87.493 1.787.902 2.736 1.223l-.7 2.158a.716.716 0 101.36.442l.715-2.2c.978.234 1.976.374 2.98.419v2.315a.716.716 0 101.432 0V8.087a15.812 15.812 0 002.98-.419l.718 2.2a.716.716 0 001.362-.442l-.7-2.158c.948-.32 1.865-.73 2.737-1.223l1.388 1.911a.716.716 0 001.16-.842l-1.328-1.827c.8-.554 1.547-1.18 2.232-1.87l1.908 1.385a.716.716 0 10.842-1.159h.001z"
        className={css.customPath}
        fillRule="nonzero"
    />
    </svg>
  );
};

export default IconCloseEye;
