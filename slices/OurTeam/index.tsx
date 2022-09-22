import { PrismicRichText } from '@prismicio/react';
import Button from '@src/components/Button/Button';
import IconArrowLeft from '@src/components/IconArrowLeft/IconArrowLeft';
import IconArrowRight from '@src/components/IconArrowRight/IconArrowRight';
import Image from 'next/image';
import { useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import css from './styles.module.scss';

type TCoachItemProps = {
  picture: any;
  name: string;
  experience: string;
  studio: string;
  description: string;
};

const CoachItem: React.FC<TCoachItemProps> = ({
  picture,
  name,
  experience,
  studio,
  description,
}) => {
  return (
    <div className={css.coachItem}>
      <div className={css.imageContainer}>
        <Image
          className={css.customImage}
          src={picture?.url || ''}
          alt={picture?.alt || `${name} picture`}
          objectFit={'cover'}
          objectPosition={'center'}
          layout="fill"
          loading={'lazy'}
          unoptimized={true}
        />
      </div>
      <div className={css.coachInfo}>
        <p className={css.coachName}>{name}</p>
        <p className={css.coachExperience}>{experience}</p>
        <p className={css.coachStudio}>{studio}</p>
        <p className={css.coachDescription}>{description}</p>
      </div>
    </div>
  );
};

type TOurTeamSectionProps = {
  slice?: any;
};

const OurTeamSection: React.FC<TOurTeamSectionProps> = ({ slice }) => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <IconArrowLeft onClick={sliderRef.current?.slickPrev} />,
    nextArrow: <IconArrowRight onClick={sliderRef.current?.slickNext} />,
    dots: true,
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

  const coaches = slice?.items || [];

  return (
    <div className={css.root}>
      <div className={css.teamText}>
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
      </div>
      <Slider {...settings} className={css.slider} ref={sliderRef}>
        {coaches.map((coach: any) => {
          return (
            <CoachItem
              key={coach.cid}
              studio={coach.studio}
              name={coach.name}
              experience={coach.experience}
              description={coach.description}
              picture={coach?.image}
            />
          );
        })}
      </Slider>
      <Button className={css.bookBtn}>
        <FormattedMessage
          id="AboutUsPage.bookCoach"
          defaultMessage="Book a coach"
        />
      </Button>
    </div>
  );
};

export default OurTeamSection;
