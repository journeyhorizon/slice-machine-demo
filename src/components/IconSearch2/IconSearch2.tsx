import classNames from 'classnames';

import css from './IconSearch2.module.scss';

type TIconSearch2Props = {
  className?: string;
};

const IconSearch2: React.FC<TIconSearch2Props> = ({ className }) => {
  const classes = classNames(css.root, className);
  return (
    <svg
      className={classes}
      width="70.939"
      height="71.053"
      viewBox="0 0 70.939 71.053"
    >
      <g id="Group_5" data-name="Group 5" transform="translate(1 1)">
        <circle
          id="Oval"
          cx={24}
          cy={24}
          r={24}
          fill="none"
          stroke="#4a4a4a"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          id="Path_10"
          data-name="Path 10"
          d="M0,10.7,22.036,33.721,32.994,22.443,10.3,0"
          transform="translate(35.537 34.891)"
          fill="none"
          stroke="#4a4a4a"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          id="Path_14"
          data-name="Path 14"
          d="M0,0A21.176,21.176,0,0,1,9.226,3.428a18.009,18.009,0,0,1,5.37,6.3"
          transform="translate(24.938 5.027)"
          fill="none"
          stroke="#0098da"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
      </g>
    </svg>
  );
};

export default IconSearch2;
