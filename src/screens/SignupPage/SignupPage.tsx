import routeConfiguration from '@config/routeConfiguration';
import Footer from '@src/components/Footer/Footer';
import LayoutWrapperFooter from '@src/components/LayoutWrapperFooter/LayoutWrapperFooter';
import LayoutWrapperMain from '@src/components/LayoutWrapperMain/LayoutWrapperMain';
import LayoutWrapperTopbar from '@src/components/LayoutWrapperTopbar/LayoutWrapperTopbar';
import Page from '@src/components/Page/Page';
import Topbar from '@src/components/Topbar/Topbar';
import { setCookie } from '@utils/cookies';
import { createResourceLocatorString } from '@utils/routes';
import { AmplifyError } from '@utils/types';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import ChooseMembership from './ChooseMembership';
import { clearData, SignUpPhase, SUBSCRIPTION_PLANS } from './helper';
import Signup from './Signup';
import css from './SignupPage.module.scss';

const SIGN_UP_STORAGE_KEY = 'SIGN_UP_KEY';

export default function SignupPage() {
  const title = 'Sign Up | Elements4Life';
  const description = 'Sign Up | Elements4Life';
  const [submitError, setSubmitError] = useState<AmplifyError | null>(null);
  const router = useRouter();
  const { query: urlQueryParams } = router;
  const {
    plan_id: planId,
    phase = SignUpPhase.CHOOSE_PLAN,
    referral,
  } = urlQueryParams || {};

  useEffect(() => {
    let shouldRedirect = false;
    if (!Object.values(SignUpPhase).includes(phase as SignUpPhase)) {
      shouldRedirect = true;
    }
    const selectedPlan = SUBSCRIPTION_PLANS.find(plan => plan.id === planId);
    if (planId && !selectedPlan) {
      shouldRedirect = true;
    }

    if (shouldRedirect) {
      router.replace(
        createResourceLocatorString('HomePage', routeConfiguration),
      );
    }
  }, [phase]);

  const goToNextPhase = useCallback(
    (phase: SignUpPhase, params: Record<string, string | boolean> = {}) => {
      router.push(
        createResourceLocatorString(
          'SignupPage',
          routeConfiguration,
          {},
          { phase, ...params },
        ),
      );
    },
    [router],
  );

  useEffect(() => {
    return () => {
      setCookie('planId', '', 0);
      clearData(SIGN_UP_STORAGE_KEY);
    };
  }, []);

  // clean up error for each phase
  useEffect(() => {
    setSubmitError(null);
  }, [phase]);

  const handleSelectPlan = (planId: string) => {
    setCookie('planId', planId, 1);
    goToNextPhase(SignUpPhase.SIGN_UP, {
      plan_id: planId,
      referral: referral as string,
    });
  };

  const content = useMemo(() => {
    switch (phase) {
      case SignUpPhase.CHOOSE_PLAN:
        return <ChooseMembership onSubmit={handleSelectPlan} />;
      case SignUpPhase.SIGN_UP:
        return (
          <Signup
            selectedPlanId={planId}
            isSubmitting={false}
            submitError={submitError}
            onSubmit={() => {}}
          />
        );
      default:
        null;
    }
  }, [phase, handleSelectPlan, planId, submitError]);

  return (
    <Page title={title} description={description}>
      <LayoutWrapperTopbar>
        <Topbar />
      </LayoutWrapperTopbar>
      <LayoutWrapperMain>
        <div className={css.container}>{content}</div>
      </LayoutWrapperMain>
      <LayoutWrapperFooter>
        <Footer />
      </LayoutWrapperFooter>
    </Page>
  );
}
