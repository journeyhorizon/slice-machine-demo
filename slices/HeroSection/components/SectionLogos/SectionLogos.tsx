import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import css from './SectionLogos.module.scss';

type TSectionLogosProps = {
  className?: string;
  style?: any;
  logos?: any[];
};

const SectionLogos: React.FC<TSectionLogosProps> = ({
  className,
  style,
  logos = [],
}) => {
  const classes = classNames(css.root, className);

  return (
    <div className={classes} style={style}>
      <div className={css.title}>
        <FormattedMessage
          id="SectionLogos.logosTile"
          defaultMessage="as seen and heard on"
        />
      </div>
      <div className={css.logos}>
        {logos.map((item, index) => (
          <React.Fragment key={`fragment-logo${index}`}>
            <div
              key={`logo${index}`}
              id={`logo${index}`}
              className={classNames(css.logoWrapper, css.logoRegion)}>
              {item?.logo?.url && (
                <Image
                  layout={'fill'}
                  src={item?.logo?.url}
                  objectFit="contain"
                  objectPosition="center"
                  title={item.brand_name}
                  alt={item?.logo?.alt || item.brand_name}
                  loading={'lazy'}
                  unoptimized={true}
                />
              )}
            </div>
            <style jsx key={`style-logo${index}`}>
              {`
                #logo${index} {
                  width: ${item.logo_mobile_width}px;
                  height: ${item.logo_mobile_height}px;
                }

                @media all and (min-width: 1280px) {
                  #logo${index} {
                    width: ${item.logo_width}px;
                    height: ${item.logo_height}px;
                  }
                }
              `}
            </style>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SectionLogos;
