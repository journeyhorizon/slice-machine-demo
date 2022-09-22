import { PrismicRichText } from '@prismicio/react';
import Button from '@src/components/Button/Button';
import { TListing } from '@utils/types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import css from './styles.module.scss';

type TSectionStepsProps = {
  className?: string;
  listings?: TListing[];
  slice?: any;
};

const SectionSteps: React.FC<TSectionStepsProps> = ({ slice }) => {
  const intl = useIntl();
  const router = useRouter();

  const steps = slice.items || [];

  const startFreeTrialText = intl.formatMessage({
    id: 'SectionSteps.startFreeTrial',
    defaultMessage: 'Start your 14 day free trial',
  });
  const linkRiderect = '/signup';
  const handleRedirect = (linkRiderect: string) => () => {
    router.push(linkRiderect);
  };

  return (
    <div className={css.root}>
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
      <div className={css.steps}>
        {steps.map((step: any) => (
          <div key={step.sid} className={css.step}>
            <div className={css.stepIconWrapper}>
              <Image
                className={css.icon}
                src={step.icon.url}
                alt={step.icon.alt}
                layout="fill"
                loading={'lazy'}
                objectFit={'cover'}
                objectPosition={'center'}
                unoptimized={true}
              />
            </div>
            <div className={css.stepTitle}>
              <PrismicRichText field={step.title} />
            </div>
            <div className={css.stepDescription}>
              <PrismicRichText field={step.description} />
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
  );
};

export default SectionSteps;
