import { DateTime } from 'luxon';
import {
  TAbout,
  TFaq,
  THyperLink,
  TListing,
  TPaymentCard,
  TPrivacy,
  TProgram,
  TTermCondition,
  TClub,
  TCoach,
  TBrand,
  TFilter,
} from './types';

export const normalizeListingsResponse = (
  response: any,
): {
  meta: {
    page: number;
    perPage: number;
    totalPages: number;
    totalItems: number;
  };
  data: TListing[];
} => {
  return {
    meta: response.meta,
    data: normalizeListingsResponseEntities(response.listings),
  };
};

export const normalizeListingsResponseEntities = (
  response: any,
): TListing[] => {
  return response.map((result: any) => {
    return {
      id: result?.id || null,
      attributes: {
        createdAt: result?.created_at || null,
        title: result?.listing_title || null,
        description: result?.listing_description || null,
        slug: result?.slug || null,
        featured: result?.featured || null,
        viewsCount: result?.viewsCount || null,
        publicData: {
          teacherDescription: result?.teacher_description || null,
          category: {
            name: result?.category?.name || null,
            slug: result?.category?.slug || null,
          },
          coaches: {
            name: result?.coach?.name || null,
            slug: result?.coach?.slug || null,
          },
          focus: {
            name: result?.focus?.name || null,
            slug: result?.focus?.slug || null,
          },
          level: {
            name: result?.level?.name || null,
            slug: result?.level?.slug || null,
          },
          equipment: {
            name: result?.equipment?.name || null,
            slug: result?.equipment?.slug || null,
          },
          music: {
            name: result?.music?.name || null,
            slug: result?.music?.slug || null,
          },
          duration: result?.video_embed?.duration || null,
          videoEmbed: {
            duration: result?.video_durationMinute || null,
          },
        },
      },
      images: [
        {
          url: result?.thumbnail_url || null,
        },
      ],
    };
  });
};

export type PaymentMethodType = {
  id: string | null;
  type: string;
  card: TPaymentCard;
};

export const ensurePaymentMethodCard = (
  stripePaymentMethod: PaymentMethodType | null,
): PaymentMethodType => {
  const empty = {
    id: null,
    card: {},
  };
  const cardPaymentMethod = { ...empty, ...stripePaymentMethod };

  return cardPaymentMethod as PaymentMethodType;
};

export const normalizeListingDetail = (
  response: any,
): {
  data: TListing;
} => {
  return {
    data: normalizeListingsResponseEntities(response)[0],
  };
};

export const normalizeAboutDetail = (response: any): { data: TAbout } => {
  return {
    data: {
      attributes: {
        heroSection: {
          title: response.heroSection?.title || null,
          subTitle: response.heroSection?.subTitle || null,
          hereContent: response.heroSection?.hereContent.map((result: any) => ({
            titleMessage: result.titleMessage,
            defaultMessage: result.defaultMessage,
            link: result?.link || null,
          })),
        },
        journeySection: {
          title: response.journeySection?.title || null,
          journeyContent: response.journeySection?.journeyContent.map(
            (result: any) => ({
              title: result.title,
              defaultMessage: result.defaultMessage,
              link: result?.link || null,
              image: {
                alt: result.image?.name || null,
                nomal: result.image?.url || null,
                small: result.image?.formats?.small?.url || null,
                thumbnail: result.image?.formats?.thumbnail?.url || null,
              },
            }),
          ),
        },
        teamSection: {
          title: response.teamSection?.title || null,
          subTitle: response.teamSection?.subTitle || null,
          teamDescription: response?.teamSection?.teamDescription || null,
          coachList: response?.teamSection?.listCoach.map((result: any) => ({
            id: result.id,
            coachName: result?.coachName || null,
            coachExperience: result?.coachExperience || null,
            coachStudio: result?.coachStudio || null,
            coachDescription: result?.coachDescription || null,
            image: {
              alt: result.image?.name || null,
              nomal: result.image?.url || null,
              small: result.image?.formats?.small?.url || null,
              thumbnail: result.image?.formats?.thumbnail?.url || null,
            },
          })),
        },
        quoteSection: {
          title: response.quoteSection?.title || null,
          quoteList: response.quoteSection?.quoteList.map((result: any) => ({
            id: result.id,
            quote: result.quote,
            authorName: result.authorName,
          })),
        },
      },
    },
  };
};

export const normalizePrivacyDetail = (response: any): { data: TPrivacy } => {
  return {
    data: {
      attributes: {
        title: response?.title,
        privacyList: response?.privacyList?.map((result: any) => ({
          id: result.id,
          title: result.title,
          privacy: result.privacy,
        })),
      },
    },
  };
};

export const normalizeFAQDetail = (response: any): { data: TFaq } => {
  return {
    data: {
      attributes: {
        title: response?.title,
        faqList: response?.faqList?.map((result: any, index: number) => ({
          id: result.id,
          question: result.question,
          answer: result.answer,
          active: index === 0,
        })),
      },
    },
  };
};

export const normalizeTermConditionDetail = (
  response: any,
): { data: TTermCondition } => {
  return {
    data: {
      attributes: {
        title: response?.title,
        description: response?.description,
        termConditionList: response?.termAndConditionList?.map(
          (result: any) => ({
            id: result.id,
            title: result?.title,
            description: result?.description,
          }),
        ),
      },
    },
  };
};

export const normalizeClubList = (response: any): { data: TClub[] } => {
  return {
    data: response?.map((item: any) => {
      return {
        name: item?.name,
        slug: item?.slug,
      };
    }),
  };
};

export const normalizeHyperLinks = (response: any): { data: THyperLink } => {
  return {
    data: {
      attributes: {
        shop: response?.shop,
        instagram: response?.instagram,
        facebook: response?.facebook,
        youtube: response?.youtube,
      },
    },
  };
};

export const normalizeProgramsResponseEntities = (
  response: any,
): TProgram[] => {
  return response.map((result: any) => {
    return {
      id: result?.id || null,
      attributes: {
        createdAt: result?.created_at || null,
        title: result?.program_title || null,
        description: result?.program_description || null,
        slug: result?.slug || null,
        status: 'locked',
        intensity: result?.intensity || null,
        price: result?.price || null,
        publicData: {
          teacherDescription: result?.teacher_description || null,
          listings: normalizeListingsOfProgramEntities(result.listings),
          category: {
            name: result?.category?.name || null,
            slug: result?.category?.slug || null,
          },
          coaches: {
            name: result?.coach?.name || null,
            slug: result?.coach?.slug || null,
          },
          focus: result?.focus.map((item: any) => ({
            name: item?.name || null,
            slug: item?.slug || null,
          })),
          level: {
            name: result?.level?.name || null,
            slug: result?.level?.slug || null,
          },
          equipment: result?.equipments.map((item: any) => ({
            name: item?.name || null,
            slug: item?.slug || null,
          })),
          music: {
            name: result?.music?.name || null,
            slug: result?.music?.slug || null,
          },
        },
      },
      images: [
        {
          url: result?.thumbnail_url || null,
        },
      ],
    };
  });
};

export const normalizeProgramsResponse = (
  response: any,
): {
  meta: {
    page: number;
    perPage: number;
    totalPages: number;
    totalItems: number;
  };
  data: TProgram[];
} => {
  return {
    meta: response.meta,
    data: normalizeProgramsResponseEntities(response.programs),
  };
};

export const normalizeCoachesResponseEntities = (response: any): TCoach[] => {
  return response.map((result: any) => {
    return {
      id: result?.id,
      attributes: {
        createdAt: result?.created_at,
        slug: result?.slug,
        name: result?.name,
      },
    };
  });
};

export const normalizeCoachesResponse = (
  response: any,
): {
  meta: {
    page: number;
    perPage: number;
    totalPages: number;
    totalItems: number;
  };
  data: TCoach[];
} => {
  return {
    meta: response.meta,
    data: normalizeCoachesResponseEntities(response.coaches),
  };
};

export const normalizeBrandsResponseEntities = (response: any): TBrand[] => {
  return response.map((result: any) => {
    return {
      id: result?.id,
      attributes: {
        createdAt: result?.created_at,
        slug: result?.slug,
        name: result?.name,
      },
    };
  });
};

export const normalizeBrandsResponse = (
  response: any,
): {
  meta: {
    page: number;
    perPage: number;
    totalPages: number;
    totalItems: number;
  };
  data: TBrand[];
} => {
  return {
    meta: response.meta,
    data: normalizeBrandsResponseEntities(response.brands),
  };
};


export const normalizeListingsOfProgramEntities = (response: any): any[] => {
  return response.map((result: any) => {
    return {
      id: result?.id || null,
      attributes: {
        createdAt: result?.created_at || null,
        title: result?.listing_title || null,
        description: result?.listing_description || null,
        slug: result?.slug || null,
        featured: result?.featured || null,
        viewsCount: result?.viewsCount || null,
        publicData: {
          teacherDescription: result?.teacher_description || null,
          categoryId: result?.category || null,
          coachId: result?.coach || null,
          focus: result?.focus || null,
          level: result?.level || null,
          equipment: result?.equipment || null,
          music: result?.music || null,
          duration: result?.video_embed?.duration || null,
          videoEmbed: {
            duration: result?.video_durationMinute || null,
          },
        },
      },
      images: [
        {
          url: result?.thumbnail_url || null,
        },
      ],
    };
  });
};

export const normalizeProgramDetail = (
  response: any,
): {
  data: TProgram;
} => {
  return {
    data: normalizeProgramsResponseEntities(response)[0],
  };
};

export const normalizeSubscription = (subscription: any) => {
  let subscriptionStatus = 'none';
  let endDate = null;
  if (subscription) {
    const { trial_end, current_period_end, status } = subscription || {};
    const currentDate = new Date().getTime();
    const isExpiredTrial = trial_end ? trial_end * 1000 <= currentDate : true;
    const isCanceled = status === 'canceled';
    const isEnd = current_period_end
      ? current_period_end * 1000 <= currentDate
      : false;

    if (status === 'trialing') {
      subscriptionStatus = isExpiredTrial ? 'trialEnded' : 'subscripting';
    } else if (isEnd) {
      subscriptionStatus = 'subscriptionEnded';
    } else if (isCanceled && !isEnd && current_period_end) {
      endDate = current_period_end
        ? DateTime.fromSeconds(current_period_end).toFormat('dd MMMM yyyy')
        : null;
      subscriptionStatus = 'subscripting';
    } else if (status === 'active') {
      subscriptionStatus = 'subscripting';
    }
  }

  return {
    subscriptionStatus,
    endDate,
  };
};


export const normalizeHomePageData = (response: any): { data: any } => {
  return {
    data : {
      attributes : {
        replaceAndOnDemandVideo : {
          name : response?.replaceAndOnDemandVideo?.name,
          url : response?.replaceAndOnDemandVideo?.url,
        },
        smartAppBanner : {
          name : response?.smartAppBanner?.name,
          url : response?.smartAppBanner?.url,
        }
      }
    }
  }
}
export const accessPeriodAdapter = (accessPeriod: string) => {
  switch (accessPeriod) {
    case '14Days':
      return 14;
    case '30Days':
      return 30;
  
    default:
      return;
  }
}

export const normalizeFiltersResponseEntities = (response: any): TFilter[] => {
  return response.map((result: any) => {
    return {
      id: result?.id,
      attributes: {
        createdAt: result?.created_at,
        slug: result?.slug,
        name: result?.name,
      },
    };
  });
};

export const normalizeFilterResponse = (response : any):{
  meta: {
    page: number;
    perPage: number;
    totalPages: number;
    totalItems: number;
  };
  data: TFilter[];
} =>{
  return {
    meta: response.meta,
    data: normalizeFiltersResponseEntities(response.filters),
  };
}