import classNames from 'classnames';
import css from './IconShowEye.module.scss';

type TIconShowEyeProps = {
  className?: string;
  rootClassName?: string;
};

const IconShowEye: React.FC<TIconShowEyeProps> = ({
  rootClassName,
  className,
}) => {
  const classes = classNames(rootClassName || css.root, className);

  return (
    <svg width={27} height={15} xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
    <path
      d="M13.5 0C8.01 0 3.14 2.804.116 7.129a.635.635 0 000 .732C3.14 12.186 8.011 15 13.5 15c5.49 0 10.36-2.814 13.384-7.139a.635.635 0 000-.732C23.86 2.804 18.989 0 13.5 0zm0 1.25c4.918 0 9.276 2.448 12.099 6.25-2.823 3.8-7.183 6.25-12.099 6.25S4.224 11.3 1.401 7.5C4.224 3.698 8.582 1.25 13.5 1.25zm0 1.875c-2.365 0-4.295 1.966-4.295 4.375s1.93 4.375 4.295 4.375 4.295-1.966 4.295-4.375-1.93-4.375-4.295-4.375zm0 1.25c1.702 0 3.068 1.392 3.068 3.125s-1.366 3.125-3.068 3.125-3.068-1.392-3.068-3.125 1.366-3.125 3.068-3.125z"
      fill="#000"
      fillRule="nonzero"
    />
    </svg>
  );
};

export default IconShowEye;
