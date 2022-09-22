export type ImageVariant = {
  [name: string]: { url: string | null };
};

export type TImage = {
  dimensions?: {
    width: number;
    height: number;
  };
  alt?: string | null;
  url: string;
};

export type TCoach = {
  id: string;
  attributes: {
    slug: string;
    name: string;
    createdAt: string;
  };
};

export type TBrand = {
  id: string;
  attributes: {
    slug: string;
    name: string;
    createdAt: string;
  };
};

export type TFocus = {
  id: string;
  attributes: {
    slug: string;
    name: string;
    createdAt: string;
  };
};

export type TEquipment = {
  id: string;
  attributes: {
    slug: string;
    name: string;
    createdAt: string;
  };
};

export type TMusicItem = {
  id: string;
  attributes: {
    slug: string;
    name: string;
    createdAt: string;
  };
};

export type TCategory = {
  id: string;
  attributes: {
    slug: string;
    name: string;
    createdAt: string;
  };
};

export type TLevel = {
  id: string;
  attributes: {
    slug: string;
    name: string;
    createdAt: string;
  };
};

export type TFilter = {
  id: string;
  attributes: {
    slug: string;
    name: string;
    createdAt: string;
  };
};

export type TListing = {
  id: string;
  type: string;
  attributes: {
    createdAt: string;
    title: string;
    description: string;
    slug: string;
    featured: boolean;
    viewsCount: number;
    publicData: {
      liveTime?: number;
      teacherDescription?: string;
      category?: TRelation;
      coaches?: TRelation;
      focus?: TRelation;
      level?: TRelation;
      equipment?: TRelation;
      music?: TRelation;
      duration?: number;
      videoEmbed?: {
        duration: number;
      };
      [name: string]: any;
    };
  };
  images?: TImage[];
};

export type TFilterConfig = {
  id: string;
  label: string;
  type:
    | 'SelectSingleFilter'
    | 'SelectMultipleFilter'
    | 'KeywordFilter'
    | 'RangeFilter';
  group: 'primary' | 'secondary';
  queryParamNames: string[];
  config?: {
    min?: number;
    max?: number;
    step?: number;
    twoColumns?: boolean;
    rangeLabel?: string;
    options?: {
      key: string;
      label: string;
    }[];
  };
};

export type TSortConfig = {
  active: boolean;
  queryParamName: string;
  relevanceKey: string;
  conflictingFilters: string[];
  options: {
    key: string;
    label: string;
    longLabel?: string;
  }[];
};

export type AmplifyError = {
  code: string;
  name: string;
  message: string;
};

export type TPaymentCard = {
  brand: string;
  exp_month: number;
  exp_year: number;
  last4: string;
};

export type TPaymentMethodFormValues = {
  name?: string | null;
  paymentMethod?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  postal?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
};

export type ErrorType =
  | {
      message?: string;
      status?: number | string;
    }
  | any
  | null;

export type TRelation = {
  name?: string;
  slug?: string;
};

export type TAbout = {
  attributes: {
    heroSection: {
      title: string;
      subTitle: string;
      hereContent: any[];
    };
    journeySection: {
      title: string;
      journeyContent: any[];
    };
    teamSection: {
      title: string;
      subTitle: string;
      teamDescription: string;
      coachList: any[];
    };
    quoteSection: {
      title: string;
      quoteList: any[];
    };
  };
};

export type TPrivacy = {
  attributes: {
    title: string;
    privacyList: {
      title: string;
      privacy: string;
    }[];
  };
};

export type TFaq = {
  attributes: {
    title: string;
    faqList: {
      question: string;
      answer: string;
    }[];
  };
};

export type TTermCondition = {
  attributes: {
    title: string;
    description: string;
    termConditionList: {
      title: string;
      descirption: string;
    }[];
  };
};

export type THyperLink = {
  attributes: {
    shop: string;
    instagram: string;
    facebook: string;
    youtube: string;
  };
};

export type TProgram = {
  id: string;
  attributes: {
    createdAt: string;
    title: string;
    description: string;
    slug: string;
    status: string;
    intensity: number;
    price: number;
    publicData: {
      listings: TListing[];
      teacherDescription?: string;
      category?: TRelation;
      coaches?: TRelation;
      focus?: TRelation[];
      level?: TRelation;
      equipment?: TRelation[];
      music?: TRelation;
      [name: string]: any;
    };
  };
  images?: TImage[];
};

export type TInfoVideo = {
  listingId: string;
  title: string;
  image: string;
  duration: string;
  urlVideo: string;
  durationTitle: string;
};

export type TClub = {
  name: string;
  slug: string;
};

export enum ClaimStatus {
  UN_CLAIMED = 'un_claimed',
  CLAIMED = 'claimed',
  NO_CLAIMED = 'no_claimed',
}

export type TTotalReferral = {
  userId: string;
  registeredAt: string;
  claimedStatus: ClaimStatus;
};

export type TReferralData = {
  referralCode?: string;
  invitesSent?: number;
  clickCount?: number;
  confirmed?: number;
  totalReferrals?: TTotalReferral[];
  claimedCommission?: number;
  outstanding?: number;
  couponIds?: string[];
  userId?: string;
  id?: string;
  stripeConnectedAccountId?: string;
};

export enum PeriodFilterOptions {
  MONTH = 'month',
  YEAR = 'year',
}

export type countryCode = {
  code: string;
  currency: string;
  accountConfig: {
    [name: string]: boolean;
  };
};

export type TReplaceAndOnDemandVideo = {
  name: string;
  url: string;
};

export type TSmartAppBanner = {
  name: string;
  url: string;
};

export type THomePageProps = {
  replaceAndOnDemandVideo: TReplaceAndOnDemandVideo;
  smartAppBanner: TSmartAppBanner;
  page: any;
};
