import SubscriptionPlanCard from '@src/components/SubscriptionPlanCard/SubscriptionPlanCard';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import css from './ChooseMembership.module.scss';
import { SUBSCRIPTION_PLANS } from './helper';

type TChooseMembershipProps = {
  onSubmit: Function;
};

const ChooseMembership: React.FC<TChooseMembershipProps> = ({ onSubmit }) => {
  const handleSelect = (selectedPlanId: string) => {
    if (selectedPlanId) {
      onSubmit(selectedPlanId);
    }
  };

  return (
    <div className={css.root}>
      <h1 className={css.pageTitle}>
        <FormattedMessage
          id="SignupPage.ChooseMembership.title"
          defaultMessage="Choose your membership"
        />
      </h1>
      <div className={css.planList}>
        {SUBSCRIPTION_PLANS.map(plan => (
          <SubscriptionPlanCard
            key={plan.id}
            className={css.planCard}
            plan={plan}
            name="plan"
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseMembership;
