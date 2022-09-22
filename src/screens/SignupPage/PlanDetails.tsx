import classNames from 'classnames';
import React from 'react';
import { TSubscriptionPlan } from './helper';
import css from './PlanDetails.module.scss';

type TPlanDetailsProps = {
  className?: string;
  plan?: TSubscriptionPlan;
};

const PlanDetails: React.FC<TPlanDetailsProps> = ({ plan = {}, className }) => {
  const { title, priceInfo, priceMoreInfo, trialTitle } = plan;
  const classes = classNames(css.root, className);

  return plan ? (
    <div className={classes}>
      <div className={css.selectedPlanTitle}>{title}</div>
      <div className={css.selectedPlanText}>{trialTitle}</div>
      <div className={css.selectedPlanText}>{priceMoreInfo}</div>
      <div className={classNames(css.selectedPlanText, css.desktop)}>
        {priceInfo}
      </div>
      <p className={css.description}>
        Your E4L membership is one of the highest value and gives you 24/7
        access to modern, updated, functional live-stream classes every day with
        a comprehensive replay library. You will also receive full on-demand
        content with various sessions, classes, challenges and specialist
        programs that you can access anytime, anywhere.
        <br />
        <br />
        We specialise in unique E4L Smart Experiences focusing on functional
        training, strength, mobility, coaching, HIIT, volume training, cycles,
        programs, running, yoga, barre and pilates.
        <br />
        <br />
        We have a Smart Experience for everyone from beginner to advanced.
        <br />
        <br />
        *Prices are in AUD and charged as outlined. All membership options offer
        you the first 14 days FREE which is great value. You’ll get unrestricted
        access to all of Elements4Life Online LIVE and REPLAY sessions. When
        your membership is activated after 14 days you will receive BONUS third
        party content, coaching programs and additional challenges.
        <br />
        <br />
        We collect your credit card information upfront and your subscription
        will only be charged in advance after the 14 day free trial ends. Each
        membership will auto-renew at the end of each subscription period and is
        paid in advance. You can cancel auto-renewal at any time with a few
        clicks or emailing us at getstarted@elements4life.com.au
      </p>
    </div>
  ) : null;
};

export default PlanDetails;
