import classNames from 'classnames';

import css from './IconGoal.module.scss';

type TIconGoalProps = {
  className?: string;
};

const IconGoal: React.FC<TIconGoalProps> = ({ className }) => {
  const classes = classNames(css.root, className);
  return (
    <svg
      className={classes}
      width="68.922"
      height="70.03"
      viewBox="0 0 68.922 70.03"
    >
      <g id="Group_4" transform="translate(1 0.757)">
        <circle
          id="Oval"
          cx="30.5"
          cy="30.5"
          r="30.5"
          transform="translate(0 7.273)"
          fill="none"
          stroke="#4a4a4a"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <circle
          id="Oval-2"
          cx="19.5"
          cy="19.5"
          r="19.5"
          transform="translate(11 18.273)"
          fill="none"
          stroke="#4a4a4a"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <circle
          id="Oval-3"
          cx="8.5"
          cy="8.5"
          r="8.5"
          transform="translate(22 29.273)"
          fill="none"
          stroke="#4a4a4a"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          id="Path_11"
          d="M0,36.753,21.552,14.9V6.888a.15.15,0,0,1,.049-.111L28.666.306a.15.15,0,0,1,.249.139l-1.4,7.276h8.242a.15.15,0,0,1,.107.256l-6.819,6.876a.15.15,0,0,1-.107.044H21.552"
          transform="translate(31 0)"
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

export default IconGoal;
