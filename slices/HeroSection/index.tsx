import Button from '@src/components/Button/Button';
import SectionLogos from './components/SectionLogos/SectionLogos';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import css from './styles.module.scss';

type THeroSectionProps = {
  slice?: any;
};

const HeroSection: React.FC<THeroSectionProps> = ({ slice }) => {
  const classes = classNames('hero-section-container', css.root);
  const router = useRouter();
  const linkRiderect = '/signup';

  const handleRedirect = (linkRiderect: string) => () => {
    router.push(linkRiderect);
  };

  return (
    <>
      <div className={classes}>
        <div
          className={classNames(
            css.heroImageContainer,
            'hero-image-container',
          )}>
          <div className={css.content}>
            <h1 className={css.title}>
              <span>{slice.primary.title}</span>
            </h1>
            {linkRiderect && (
              <Button
                size="large"
                className={css.callToAction}
                title={slice.primary.cta_text}
                onClick={handleRedirect(linkRiderect)}>
                {slice.primary.cta_text}
              </Button>
            )}
          </div>
        </div>
        <SectionLogos
          className={css.heroLogosContainer}
          style={{ backgroundColor: `${slice.primary.logos_background_color}` }}
          logos={slice.items}
        />
      </div>
      <style jsx>{`
        .hero-section-container {
          background-image: url('${slice.primary?.mobile_background_image
            ?.url}');
        }

        @media all and (min-width: 1280px) {
          .hero-section-container {
            background-image: url('${slice.primary?.background_image?.url}');
          }
        }

        .hero-image-container {
          background-image: url('${slice.primary?.hero_mobile_image?.url}');
        }

        @media all and (min-width: 768px) {
          .hero-image-container {
            background-image: url('${slice.primary?.hero_image?.url}');
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
