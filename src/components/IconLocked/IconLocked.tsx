import classNames from 'classnames';

import css from './IconLocked.module.css';

type TIconLockedProps = {
  className?: string;
};

const IconLocked: React.FC<TIconLockedProps> = ({ className }) => {
  const classes = classNames(css.root, className);

  return (
    <svg
      width={38}
      height={45}
      xmlns="http://www.w3.org/2000/svg"
      className={classes}>
      <title>{'fi-rr-lock copy'}</title>
      <g fill="#F2F2F2" fillRule="nonzero">
        <path d="M28.05 13.689v-2.314C28.05 5.093 22.879 0 16.5 0 10.121 0 4.95 5.093 4.95 11.375v2.314C1.947 14.979.004 17.899 0 21.125v9.75C.005 35.36 3.696 38.995 8.25 39h16.5c4.554-.005 8.245-3.64 8.25-8.125v-9.75c-.004-3.227-1.947-6.145-4.95-7.436Zm-19.8-2.314c0-4.487 3.694-8.125 8.25-8.125s8.25 3.638 8.25 8.125V13H8.25v-1.625Zm21.45 19.5c0 2.692-2.216 4.875-4.95 4.875H8.25c-2.734 0-4.95-2.183-4.95-4.875v-9.75c0-2.692 2.216-4.875 4.95-4.875h16.5c2.734 0 4.95 2.183 4.95 4.875v9.75Z" />
        <path d="M16.5 22c-.828 0-1.5.784-1.5 1.75v3.5c0 .966.672 1.75 1.5 1.75s1.5-.784 1.5-1.75v-3.5c0-.966-.672-1.75-1.5-1.75Z" />
      </g>
    </svg>
  );
};

export default IconLocked;
