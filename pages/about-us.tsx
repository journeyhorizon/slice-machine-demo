import * as prismic from '@prismicio/client';
import sm from '../sm.json';
import AboutUsPage from '@src/screens/AboutUsPage/AboutUsPage';
import { TAboutUsProps } from '@data/staticPage';

export default function AccountRoute(props: TAboutUsProps) {
  return <AboutUsPage {...props} />;
}

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID('page', 'about-us');
  // console.log('meow', page.data.slices[1]);
  return {
    props: {
      page,
    },
    revalidate: 3600,
  };
}
