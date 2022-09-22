import Button from '@src/components/Button/Button';
import NamedLink from '@src/components/NamedLink/NamedLink';
import classNames from 'classnames';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import css from './SubscriptionPlanCard.module.scss';

type TPlanItem = {
  id: string;
  title?: string;
  priceInfo?: string;
  priceMoreInfo?: string;
  discount?: string;
  trialTitle?: string;
  trialMoreInfo?: string;
  isHighlight?: boolean;
};

type TSubscriptionPlanCardProps = {
  className?: string;
  plan: TPlanItem;
  name: string;
  onSelect: Function;
};

const SubscriptionPlanCard: React.FC<TSubscriptionPlanCardProps> = ({
  className,
  plan,
  onSelect,
}) => {
  const { id, title, priceInfo, priceMoreInfo, discount, isHighlight } = plan;
  const classes = classNames(css.root, className);

  const handleSelect: React.MouseEventHandler<HTMLButtonElement> = _ => {
    onSelect(id);
  };

  return (
    <div className={classes}>
      <div className={css.header}>
        <div className={css.title}>{title}</div>
        {discount && (
          <div className={css.discount}>
            <FormattedMessage
              id="SubscriptionPlanCard.discount"
              defaultMessage="Save {discount}"
              values={{ discount }}
            />
          </div>
        )}
      </div>
      <div className={css.main}>
        <div className={css.content}>
          <div className={css.priceInfo}>{priceInfo}</div>
          <div
            className={classNames(css.priceMoreInfo, {
              [css.priceMoreInfoHighligh]: isHighlight,
            })}>
            {priceMoreInfo}
          </div>
        </div>
        <div className={css.action}>
          <Button size="small" className={css.selectBtn} onClick={handleSelect}>
            <FormattedMessage
              id="SubscriptionPlanCard.select"
              defaultMessage="Select"
            />
          </Button>
          <NamedLink name="MembershipDetailPage" className={css.fullDetailLink}>
            <FormattedMessage
              id="SubscriptionPlanCard.fullDetailLink"
              defaultMessage="See full membership benefits"
            />
          </NamedLink>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlanCard;
