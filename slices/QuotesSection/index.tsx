import { PrismicRichText } from '@prismicio/react';
import IconArrowLeft from '@src/components/IconArrowLeft/IconArrowLeft';
import IconArrowRight from '@src/components/IconArrowRight/IconArrowRight';
import { useRef } from 'react';
import Slider from 'react-slick';
import css from './styles.module.scss';

type TQuotesSectionProps = {
  slice?: any;
};

type TQuoteItemProps = {
  quote: string;
  author: string;
};

const QuoteItem: React.FC<TQuoteItemProps> = ({ quote, author }) => {
  return (
    <div className={css.quoteItem}>
      <div className={css.quoteContent}>
        <PrismicRichText field={quote as any} />
      </div>
      <div className={css.author}>{author}</div>
    </div>
  );
};

const QuotesSection: React.FC<TQuotesSectionProps> = ({ slice }) => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <IconArrowLeft onClick={sliderRef.current?.slickPrev} />,
    nextArrow: <IconArrowRight onClick={sliderRef.current?.slickNext} />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div
      className={css.root}
      style={{ backgroundColor: slice.primary.backgroun_color }}>
      {slice.primary.title && (
        <h2 className={css.title}>
          {<PrismicRichText field={slice.primary.title} />}
        </h2>
      )}
      {slice.primary.description && (
        <div className={css.description}>
          {<PrismicRichText field={slice.primary.description} />}
        </div>
      )}
      <Slider {...settings} className={css.slider} ref={sliderRef}>
        {slice?.items?.map((item: any) => (
          <QuoteItem
            key={item.qid}
            quote={item.content}
            author={item.author_name}
          />
        ))}
      </Slider>
    </div>
  );
};

export default QuotesSection;
