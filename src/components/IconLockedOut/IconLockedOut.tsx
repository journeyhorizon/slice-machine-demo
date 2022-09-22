import classNames from 'classnames';
import css from './IconLockedOut.module.scss';

type TIconLockedOutProps = {
  className?: string;
  rootClassName?: string;
};

const IconLockedOut: React.FC<TIconLockedOutProps> = ({
  rootClassName,
  className,
}) => {
  const classes = classNames(rootClassName || css.root, className);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classes}>
      <title>{"Universal/Icons/LockedOut"}</title>
      <g strokeWidth={2.5} fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path
          stroke="#0098DA"
          fill="#0098DA"
          strokeLinecap="round"
          d="M28.182 42.364H50V26H28.182z"
        />
        <path stroke="#FFF" strokeLinecap="round" d="M39.091 38v-4.364" />
        <path
          d="M31.455 26v-2.455c0-4.067 3.176-7.363 7.09-7.363 3.915 0 7.091 3.296 7.091 7.363V26"
          stroke="#0098DA"
          strokeLinecap="round"
        />
        <path
          d="M40.182 32.545a1.091 1.091 0 1 1-2.183 0 1.091 1.091 0 0 1 2.183 0Z"
          stroke="#FFF"
        />
        <path
          stroke="#0098DA"
          strokeLinecap="round"
          d="M23.818 7.455h19.637V14M43.455 47.818v4.364H23.818M2 52.798l21.818 4.838V2L2 6.838z"
        />
        <path
          d="M19.455 30.91a3.82 3.82 0 0 1-3.819 3.817 3.82 3.82 0 0 1-3.818-3.818 3.82 3.82 0 0 1 3.818-3.818 3.82 3.82 0 0 1 3.819 3.818h0Z"
          stroke="#0098DA"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default IconLockedOut;
