import classNames from 'classnames';

import css from './IconArrowLeft.module.css';

type TIconArrowLeftProps = {
  className?: string;
  onClick?: () => void;
};

const IconArrowLeft: React.FC<TIconArrowLeftProps> = ({
  className,
  onClick = () => null,
}) => {
  const classes = classNames(css.root, className);

  return (
    <svg
      width="21.148"
      height="37.15"
      viewBox="0 0 21.148 37.15"
      className={classes}
      onClick={() => {
        if (typeof onClick === 'function') {
          onClick();
        }
      }}
    >
      <path
        id="arrowLeft"
        d="M16.586,19.415a2,2,0,0,0,2.828,0l16-16A2,2,0,1,0,32.585.588L18,15.171,3.414.588A2,2,0,1,0,.586,3.416Z"
        transform="translate(20.648 0.5) rotate(90)"
        fill="#b2b2b2"
        stroke="#b2b2b2"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
    </svg>
  );
};

export default IconArrowLeft;
