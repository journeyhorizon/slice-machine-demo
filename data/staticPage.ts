import useSWR from 'swr';

export const useQueryStaticContent = ({ typePage }: { typePage: string }) => {
  const { data } = useSWR(`/staticPage/${typePage}`);
  return data;
};

export type TAboutUsProps = {
  page?: any;
};

export type TFAQProps = {
  page?: any;
};

export type TPrivacyProps = {
  title: string;
  privacyList: {
    id: string;
    title: string;
    privacy: string;
  }[];
};

export type TTermAndConditionProps = {
  title: string;
  description?: string;
  termConditionList: {
    id: string;
    title?: string;
    descirption?: string;
  }[];
};
