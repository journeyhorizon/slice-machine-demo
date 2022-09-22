import Button from '@src/components/Button/Button';
import { useWindowSize } from '@utils/hooks';
import sectionBgImg from '@assets/section-features-bg.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import css from './styles.module.scss';
import { PrismicRichText } from '@prismicio/react';

type TFeaturesSectionProps = {
  slice?: any;
};

const FeaturesSection: React.FC<TFeaturesSectionProps> = ({ slice }) => {
  const router = useRouter();
  const intl = useIntl();
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const sectionHeight =
    windowWidth && windowHeight && windowWidth > 1440
      ? (windowWidth * sectionBgImg.height) / sectionBgImg.width
      : null;

  const features = slice.items || [];

  const startFreeTrialText = intl.formatMessage({
    id: 'SectionFeatures.startFreeTrial',
    defaultMessage: 'Start your 14 day free trial',
  });

  const linkRiderect = '/signup';
  const handleRedirect = (linkRiderect: string) => () => {
    router.push(linkRiderect);
  };

  return (
    <div
      className={css.root}
      style={
        sectionHeight
          ? { height: sectionHeight, paddingTop: 0.05 * sectionHeight }
          : {}
      }>
      {linkRiderect && (
        <Button
          className={css.startFreeTrialBtn}
          size="large"
          title={startFreeTrialText}
          onClick={handleRedirect(linkRiderect)}>
          {startFreeTrialText}
        </Button>
      )}
      <div className={css.sectionFeaturesHead}></div>
      <div className={css.sectionFeaturesBody}>
        {slice.primary.title && (
          <h2 className={css.title}>
            <PrismicRichText field={slice.primary.title} />
          </h2>
        )}
        {slice.primary.description && (
          <div className={css.description}>
            <PrismicRichText field={slice.primary.description} />
          </div>
        )}
        <div className={css.features}>
          {features.map((feature: any) => (
            <div key={feature.title} className={css.feature}>
              <div className={css.featureImage}>
                <Image
                  src={feature.image.url}
                  layout="fill"
                  loading={'lazy'}
                  alt={feature.image.alt || feature.title}
                  unoptimized={true}
                />
              </div>
              <div className={css.featureTitle}>{feature.title}</div>
              <div className={css.featureDescription}>
                <PrismicRichText field={feature.description} />
              </div>
            </div>
          ))}
        </div>
        {linkRiderect && (
          <Button
            className={css.startFreeTrialBtn}
            size="large"
            title={startFreeTrialText}
            onClick={handleRedirect(linkRiderect)}>
            {startFreeTrialText}
          </Button>
        )}
      </div>
      <div className={css.sectionFeaturesTail}></div>
    </div>
  );
};

export default FeaturesSection;
