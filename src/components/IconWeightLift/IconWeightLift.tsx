import classNames from 'classnames';

import css from './IconWeightLift.module.scss';

type TIconWeightLiftProps = {
  className?: string;
};

const IconWeightLift: React.FC<TIconWeightLiftProps> = ({ className }) => {
  const classes = classNames(css.root, className);
  return (
    <svg
      className={classes}
      width="71.3"
      height="71.277"
      viewBox="0 0 71.3 71.277"
    >
      <g id="Group_6" transform="translate(1.416 1.413)">
        <path
          id="Path_3"
          d="M3.531,0,0,3.662,14.094,18.085l3.731-3.827"
          transform="translate(0 50.347)"
          fill="none"
          stroke="#4a4a4a"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          id="Path_4"
          d="M2.884,0,0,2.709l3.826,3.62L6.532,3.72"
          transform="translate(2.312 59.39)"
          fill="none"
          stroke="#4a4a4a"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          id="Path_5"
          d="M0,38.637,38.259.577"
          transform="translate(16.584 16.731)"
          fill="none"
          stroke="#0098da"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          id="Path_6"
          d="M0,37.769,37.888,0"
          transform="translate(12.75 13.797)"
          fill="none"
          stroke="#0098da"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          id="Path_7"
          d="M0,4.655,22.115,26.576l4.66-4.649L4.724,0Z"
          transform="translate(41.692 0)"
          fill="none"
          stroke="#4a4a4a"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          id="Path_2"
          d="M0,3.879,3.879,0,25.5,21.622l-3.813,3.813Z"
          transform="translate(0 42.65)"
          fill="none"
          stroke="#4a4a4a"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          id="Path_8"
          d="M14.285,17.739l3.352-3.272L3.285,0,0,3.249"
          transform="translate(50.353 0)"
          fill="none"
          stroke="#4a4a4a"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          id="Path_9"
          d="M3.756,6.127l2.45-2.38L2.4,0,0,2.283"
          transform="translate(59.171 2.743)"
          fill="none"
          stroke="#4a4a4a"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
      </g>
    </svg>
  );
};

export default IconWeightLift;
