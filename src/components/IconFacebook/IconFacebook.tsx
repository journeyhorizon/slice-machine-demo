import classNames from 'classnames';

import css from './IconFacebook.module.css';

type TIconFacebookProps = {
  className?: string;
};

const IconFacebook: React.FC<TIconFacebookProps> = ({ className }) => {
  const classes = classNames(css.root, className);

  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 167.657 167.657"
      className={classes}
    >
      <g>
        <g xmlns="http://www.w3.org/2000/svg">
          <path
            style={{}}
            d="M83.829,0.349C37.532,0.349,0,37.881,0,84.178c0,41.523,30.222,75.911,69.848,82.57v-65.081H49.626   v-23.42h20.222V60.978c0-20.037,12.238-30.956,30.115-30.956c8.562,0,15.92,0.638,18.056,0.919v20.944l-12.399,0.006   c-9.72,0-11.594,4.618-11.594,11.397v14.947h23.193l-3.025,23.42H94.026v65.653c41.476-5.048,73.631-40.312,73.631-83.154   C167.657,37.881,130.125,0.349,83.829,0.349z"
            fill="#ffffff"
          />
        </g>
      </g>
    </svg>
  );
};

export default IconFacebook;
