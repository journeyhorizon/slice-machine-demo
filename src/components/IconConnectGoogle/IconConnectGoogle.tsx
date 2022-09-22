import classNames from 'classnames';

import css from './IconConnectGoogle.module.css';

type TIconConnectGoogleProps = {
  className?: string;
};

const IconConnectGoogle: React.FC<TIconConnectGoogleProps> = ({
  className,
}) => {
  const classes = classNames(css.root, className);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15.792"
      height="16"
      viewBox="0 0 15.792 16"
      className={classes}
    >
      <g id="logo_googleg_48dp" transform="translate(0 -3)">
        <path
          id="Shape"
          d="M7.58,1.636A9.31,9.31,0,0,0,7.436,0H0V3.095H4.249A3.683,3.683,0,0,1,2.674,5.509V7.516H5.226A7.854,7.854,0,0,0,7.58,1.636Z"
          transform="translate(7.896 9.545)"
          fill="#4285f4"
        />
        <path
          id="Shape-2"
          d="M7.056,6.48a7.482,7.482,0,0,0,5.226-1.938L9.73,2.535A4.7,4.7,0,0,1,7.056,3.3,4.713,4.713,0,0,1,2.638,0H0V2.073A7.883,7.883,0,0,0,7.056,6.48Z"
          transform="translate(0.84 12.52)"
          fill="#34a853"
        />
        <path
          id="Shape-3"
          d="M3.478,5.113a4.789,4.789,0,0,1,0-3.04V0H.84a8.1,8.1,0,0,0,0,7.185L3.478,5.113Z"
          transform="translate(0 7.407)"
          fill="#fbbc05"
        />
        <path
          id="Shape-4"
          d="M7.056,3.182a4.235,4.235,0,0,1,3.018,1.2l2.265-2.295A7.535,7.535,0,0,0,7.056,0,7.883,7.883,0,0,0,0,4.407L2.638,6.48a4.713,4.713,0,0,1,4.418-3.3Z"
          transform="translate(0.84 3)"
          fill="#ea4335"
        />
        <path
          id="Shape-5"
          d="M0,0H15.792V16H0Z"
          transform="translate(0 3)"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default IconConnectGoogle;
