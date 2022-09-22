import * as prismic from '@prismicio/client';
import sm from '../sm.json';
import FAQPage from '@src/screens/FAQPage/FAQPage';
import { TFAQProps } from '@data/staticPage';

export default function FAQRoute(props: TFAQProps) {
  return <FAQPage {...props} />;
}

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID('page', 'faq');
  // console.log('meow', page.data.slices[1]);
  return {
    props: {
      page,
    },
    revalidate: 3600,
  };
}
