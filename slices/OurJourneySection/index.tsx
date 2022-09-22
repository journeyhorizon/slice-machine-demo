import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import React from 'react';
import css from './styles.module.scss';

type TOurJourneySection = {
  slice?: any;
};

const OurJourneySection: React.FC<TOurJourneySection> = ({ slice }) => {
  const journeys = slice?.items || [];

  return (
    <div className={css.root}>
      {slice.primary.title && (
        <div className={css.title}>
          <PrismicRichText field={slice.primary.title} />
        </div>
      )}
      {slice.primary.description && (
        <div className={css.description}>
          {<PrismicRichText field={slice.primary.description} />}
        </div>
      )}
      <div className={css.journeyList}>
        {journeys.map((item: any, index: number) => {
          return (
            <div key={index} className={css.journeyItem}>
              <div className={css.imageContainer}>
                {item.image?.url && (
                  <Image
                    src={item.image.url}
                    alt={item.image.alt}
                    layout="fill"
                    className={css.customImage}
                    loading={'lazy'}
                    unoptimized={true}
                  />
                )}
              </div>
              <p className={css.journeyItemTitle}>{item.title}</p>
              {item.description && (
                <div className={css.journeyDescription}>
                  <PrismicRichText field={item.description} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurJourneySection;
