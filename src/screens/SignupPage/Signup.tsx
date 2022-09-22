import Button from '@src/components/Button/Button';
import IconConnectGoogle from '@src/components/IconConnectGoogle/IconConnectGoogle';
import IconFacebook from '@src/components/IconFacebook/IconFacebook';
import { AmplifyError } from '@utils/types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import SignupForm, { SignUpFormValues } from './forms/SignUpForm';
import { SUBSCRIPTION_PLANS } from './helper';
import PlanDetails from './PlanDetails';
import css from './Signup.module.scss';

type TSignupProps = {
  onSubmit: (values: SignUpFormValues) => any;
  selectedPlanId?: string | string[];
  isSubmitting: boolean;
  submitError?: AmplifyError | null;
};

const Signup: React.FC<TSignupProps> = ({
  selectedPlanId,
  onSubmit,
  isSubmitting,
  submitError,
}) => {
  const selectedPlan = SUBSCRIPTION_PLANS.find(
    plan => plan.id === selectedPlanId,
  );

  return (
    <div className={css.root}>
      <div className={css.highSection}>
        <PlanDetails className={css.planDetails} plan={selectedPlan} />
      </div>
      <div className={css.lowSection}>
        <div className={css.formContainer}>
          <h1 className={css.pageTitle}>
            <FormattedMessage
              id="SignupPage.Signup.title"
              defaultMessage="Create an account"
            />
          </h1>
          <SignupForm onSubmit={onSubmit} inProgress={isSubmitting}>
            {submitError && <p className={css.error}>{submitError.message}</p>}
          </SignupForm>
          <div className={css.separatedLine}>
            <div className={css.line}></div>
            <div className={css.or}>
              <FormattedMessage id="SignupPage.Signup.or" defaultMessage="or" />
            </div>
            <div className={css.line}></div>
          </div>
          <div className={css.socialLogin}>
            <Button
              className={css.socialButton}
              type="button"
              onClick={() => {}}>
              <IconConnectGoogle className={css.icon} />
              <FormattedMessage
                id="SignupPage.Signup.signupWithGoogle"
                defaultMessage="Sign up with Google"
              />
            </Button>
            <Button
              className={css.socialButton}
              type="button"
              onClick={() => {}}>
              <IconFacebook className={css.facebookIcon} />
              <FormattedMessage
                id="SignupPage.Signup.signupWithFacebook"
                defaultMessage="Sign up with Facebook"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
