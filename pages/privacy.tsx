import { TPrivacyProps } from '@data/staticPage';
import PrivacyPage from '@src/screens/PrivacyPage/PrivacyPage';

export default function PrivacyRoute(props: TPrivacyProps) {
  return <PrivacyPage {...props} />;
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Title',
      privacyList: [],
    },
    revalidate: 3600,
  };
}
