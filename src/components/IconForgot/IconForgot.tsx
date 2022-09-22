import classNames from 'classnames';
import css from './IconForgot.module.scss';

type TIconForgotProps = {
  className?: string;
  rootClassName?: string;
};

const IconForgot: React.FC<TIconForgotProps> = ({
  rootClassName,
  className,
}) => {
  const classes = classNames(rootClassName || css.root, className);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classes}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#0098da"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M27 21.65C27 14.663 21.402 9 14.5 9S2 14.663 2 21.65c0 5.79 3.848 10.658 9.09 12.16v2.79l-2.272 2.298 2.273 2.302v2.3l-2.273 2.3 2.273 2.3v3.45L14.5 55l3.41-3.45V33.81C23.151 32.308 27 27.44 27 21.65z"
          strokeWidth={2.5}
        />
        <path
          d="M18 17.5c0 1.932-1.568 3.5-3.5 3.5S11 19.432 11 17.5s1.568-3.5 3.5-3.5 3.5 1.568 3.5 3.5z"
          strokeWidth={2}
        />
        <g strokeWidth={2.5}>
          <path d="M18 35.46c3.858 2.206 8.635 2.224 12.52.076l2.48 2.18v3.428h3.462l1.153 1.2v3.37h3.04L43.105 48H48v-4.847L35.414 30.689a12.473 12.473 0 0 0-2.1-15.007c-2.894-2.866-6.836-4.059-10.604-3.579" />
          <path d="M15 17V6.615C15 4.068 17.016 2 19.5 2S24 4.068 24 6.615v5.197" />
        </g>
      </g>
    </svg>
  );
};

export default IconForgot;
