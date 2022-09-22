import classNames from 'classnames';
import Image from 'next/image';
import { MouseEventHandler } from 'react';
import css from './IconLogo.module.css';

type TIconLogoProps = {
  className?: string;
  height?: number;
  width?: number;
  onClick?: MouseEventHandler<HTMLImageElement>;
};

const IconLogo: React.FC<TIconLogoProps> = ({
  className,
  height = 60,
  width = 150,
  onClick = () => null,
}) => {
  const classes = classNames(css.root, className);
  return (
    <Image
      className={classes}
      src={'https://dwybw5237mk3a.cloudfront.net/static/e4l-online-logo.png'}
      alt="E4L"
      height={height}
      width={width}
      onClick={onClick}
      priority={true}
      unoptimized={true}
    />
  );
};

export default IconLogo;
