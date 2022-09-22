import * as prismic from '@prismicio/client';
import sm from '../sm.json';
import HomePage from '@src/screens/HomePage/HomePage';
import { THomePageProps } from '@utils/types';

export default function HomeRoute(props: THomePageProps) {
  return <HomePage {...props} />;
}

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID('page', 'home-page');
  // console.log('meow', page.data.slices[1]);
  return {
    props: {
      page,
    },
    revalidate: 3600,
  };
}
