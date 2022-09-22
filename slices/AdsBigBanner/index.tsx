import Image from 'next/image';
import React from 'react';
import css from './styles.module.scss';

type TAdsBigBannerProps = {
  slice?: any;
};

const AdsBigBanner: React.FC<TAdsBigBannerProps> = ({ slice }) => {
  const { image } = slice?.primary || {};
  return (
    image?.url && (
      <div className={css.root}>
        <div className={css.imageWrapper}>
          <Image
            className={css.image}
            src={image?.url}
            alt={image?.alt}
            layout="fill"
            loading={'lazy'}
          />
        </div>
      </div>
    )
  );
};

export default AdsBigBanner;
