export enum SignUpPhase {
  CHOOSE_PLAN = 'choosePlan',
  SIGN_UP = 'signup',
  VERIFY_EMAIL = 'verifyEmail',
  ENTER_PAYMENT = 'enterPayment',
}

export type TPage_State =
  | 'choosePlan'
  | 'signup'
  | 'verifyEmail'
  | 'enterPayment';

export const PAGE_STATE = {
  choosePlan: 'choosePlan',
  signup: 'signup',
  verifyEmail: 'verifyEmail',
  enterPayment: 'enterPayment',
};

export type TSubscriptionPlan = {
  id: string;
  title: string;
  priceInfo: string;
  priceMoreInfo: string;
  discount?: string;
  trialTitle: string;
  trialMoreInfo: string;
  additionalBenefits: string[];
  available: boolean;
  price: number;
  pricePerDayOrigin: number;
  period?: number;
  isHighlight?: boolean;
};

export const SUBSCRIPTION_PLANS: TSubscriptionPlan[] = [
  {
    id: '30DaysUnlimited',
    title: '30 DAYS UNLIMITED',
    priceInfo: '$60 upfront',
    priceMoreInfo: 'Only $2.00 per day',
    trialTitle: 'Free for 14 days',
    trialMoreInfo: '$60 every month after the trial',
    available: true,
    additionalBenefits: [],
    price: 60,
    pricePerDayOrigin: 2,
    period: 30,
  },
  {
    id: '90DaysUnlimited',
    title: '90 DAYS UNLIMITED',
    priceInfo: '$162 upfront',
    priceMoreInfo: 'Only $54.00 per month',
    discount: '10%',
    trialTitle: 'Free for 14 days',
    trialMoreInfo: '$162 every quarter after the trial',
    available: true,
    additionalBenefits: [],
    price: 162,
    pricePerDayOrigin: 2,
    period: 90,
  },
  {
    id: '180DaysUnlimited',
    title: '180 DAYS UNLIMITED',
    priceInfo: '$288 upfront',
    priceMoreInfo: 'Only $48.00 per month',
    discount: '20%',
    trialTitle: 'Free for 14 days',
    trialMoreInfo: '$288 every 6 months after the trial',
    available: true,
    additionalBenefits: [],
    price: 288,
    isHighlight: true,
    pricePerDayOrigin: 2,
    period: 180,
  },
  {
    id: '365DaysUnlimited',
    title: '365 DAYS UNLIMITED',
    priceInfo: '$511 upfront',
    priceMoreInfo: 'Only $42.58 per month',
    discount: '30%',
    trialTitle: 'Free for 14 days',
    trialMoreInfo: '$511 every year after the trial',
    available: true,
    additionalBenefits: [],
    price: 511,
    isHighlight: true,
    pricePerDayOrigin: 2,
    period: 365,
  },
];

export const LIST_ON_DEMAND_BENEFITS = [
  'Bonus E4L Content',
  '600+ Content Providers',
  'National & International Providers',
  'Always Updating',
  'Workout From Anywhere',
  'Responsive Any Device',
  'Renew Option After 30 Days',
  'MyZone Belt (Optional)',
];

export const ON_DEMAND_SUBSCRIPTION_PLANS: TSubscriptionPlan[] =
  SUBSCRIPTION_PLANS;

export const LIST_LIVE_AND_ON_DEMAND_BENEFITS = [
  '1000+ Content Providers',
  'National & International Providers ',
  'Always Updating',
  'Workout From Anywhere',
  'Responsive Any Device',
  'Cancel Anytime After 28 Days',
  'MyZone Belt (Optional)',
];

export const LIVE_AND_ON_DEMAND_SUBSCRIPTION_PLANS: TSubscriptionPlan[] = [
  {
    id: 'liveAndOnDemand',
    title: 'LIVE & ON DEMAND',
    priceInfo: '$24.90 per week',
    priceMoreInfo: 'Only $2.00 per day',
    discount: '30%',
    trialTitle: 'Free for 14 days',
    trialMoreInfo: '$55 every month after the trial',
    available: false,
    additionalBenefits: [],
    price: 55,
    pricePerDayOrigin: 2,
  },
  {
    id: 'liveAndOnDemandUnlimited',
    title: 'LIVE & ON DEMAND - UNLIMITED',
    priceInfo: '$49.90 per week',
    priceMoreInfo: 'Only $2.00 per day',
    discount: '30%',
    trialTitle: 'Free for 14 days',
    trialMoreInfo: '$55 every month after the trial',
    available: false,
    price: 55,
    pricePerDayOrigin: 2,
    additionalBenefits: [
      'UNLIMITED Access',
      'UNLIMITED Workouts',
      'UNLIMITED Programs',
      'UNLIMITED Coach Support',
      'Bonus Technique Session',
      'Bonus Lifestyle Assessment',
      'Bonus Nutrition Assessment',
      '35+ Page BetterLife BluePrint',
    ],
  },
];

export const LIST_ONLINE_FOCUS_PT_BENEFITS = [
  'Private Weekly Online Session',
  'Personal Coach',
  '45Mins',
  'E4L Live Replay On Demand & Programs',
  '5000+ Content Providers',
  '1000+ Workouts',
  'National & International Providers',
  'Cancel Anytime After 28 Days',
  'MyZone Belt (Optional)',
  'RECEIVE ALL “UNLIMITED” BENEFITS',
];

export const ONLINE_FOCUS_PT_SUBSCRIPTION_PLANS: TSubscriptionPlan[] = [
  {
    id: 'onlineFocusPT',
    title: 'ONLINE FOCUS PT',
    priceInfo: '$99 per week',
    priceMoreInfo: 'Only $2.00 per day',
    discount: '30%',
    trialTitle: 'Free for 14 days',
    trialMoreInfo: '$55 every month after the trial',
    available: false,
    additionalBenefits: [],
    price: 55,
    pricePerDayOrigin: 2,
  },
];

export const storedData = (storageKey: string) => {
  if (
    typeof window !== 'undefined' &&
    typeof window?.sessionStorage !== 'undefined'
  ) {
    const signUpData = window.sessionStorage.getItem(storageKey);
    try {
      if (signUpData) return JSON.parse(signUpData!);
      return {};
    } catch (error) {
      return {};
    }
  }
  return {};
};

export const storeData = (data: Record<string, any>, storageKey: string) => {
  if (
    typeof window !== 'undefined' &&
    typeof window?.sessionStorage !== 'undefined'
  ) {
    try {
      const storableData = JSON.stringify(data);
      window.sessionStorage.setItem(storageKey, storableData);
    } catch (error) {}
  }
};
export const clearData = (storageKey: string) => {
  if (
    typeof window !== 'undefined' &&
    typeof window?.sessionStorage !== 'undefined'
  ) {
    window.sessionStorage.removeItem(storageKey);
  }
};
