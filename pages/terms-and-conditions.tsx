import { TTermAndConditionProps } from '@data/staticPage';
import TermsAndConditionsPage from '@src/screens/TermsAndConditionsPage/TermsAndConditionsPage';

export default function TermsAndConditionsRoute(props: TTermAndConditionProps) {
  return <TermsAndConditionsPage {...props} />;
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Title',
      description: 'Description',
      termConditionList: [],
    },
    revalidate: 3600,
  };
}
