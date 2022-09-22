import React from 'react';
import classNames from 'classnames';

import css from './IconTick.module.scss';

import tickIcon from '@assets/tick-min.png';
import Image from 'next/image';

type TIconTickProps = {
  className?: string;
  width?: number;
  height?: number;
};

const IconTick: React.FC<TIconTickProps> = ({ className, width, height }) => {
  const classes = classNames(css.root, className);
  return (
    <Image
      width={width}
      height={height}
      className={classes}
      src={tickIcon}
      alt="Tick icon"
      loading={'lazy'}
      unoptimized={true}
    />
  );
};

export default IconTick;
