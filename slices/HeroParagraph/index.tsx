import { PrismicRichText } from '@prismicio/react';
import React from 'react';
import css from './styles.module.scss';

type THeroParagraph = {
  slice?: any;
};

const HeroParagraph: React.FC<THeroParagraph> = ({ slice }) => {
  return (
    <div className={css.root}>
      {slice.primary.title && (
        <div className={css.title} style={{ color: slice.primary.title_color }}>
          <PrismicRichText field={slice.primary.title} />
        </div>
      )}
      {slice.primary.description && (
        <div className={css.descriptionBox}>
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}
    </div>
  );
};

export default HeroParagraph;
