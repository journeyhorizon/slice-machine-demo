import classNames from 'classnames';
import { MouseEventHandler } from 'react';

import css from './IconSearch.module.scss';

type TIconSearchProps = {
  className?: string;
  size?: 'default' | 'bold';
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const IconSearch: React.FC<TIconSearchProps> = ({
  className,
  size = 'default',
  onClick = () => null,
}) => {
  const classes = classNames(css.root, className);

  return size === 'bold' ? (
    <svg
      className={classes}
      width="18"
      height="18"
      viewBox="0 -1 20 20"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <g
        transform="matrix(-1 0 0 1 17 1)"
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11.733 11.733l3.727 3.727" />
        <circle cx="6.4" cy="6.4" r="6.4" />
      </g>
    </svg>
  ) : (
    <svg
      className={classes}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        transform="matrix(-1 0 0 1 17 1)"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11.733 11.733l3.727 3.727" />
        <circle cx="6.4" cy="6.4" r="6.4" />
      </g>
    </svg>
  );
};

export default IconSearch;
