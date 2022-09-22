import ContactUsPage from '@src/screens/ContactUsPage/ContactUsPage';

export default function ContactUsRoute() {
  return <ContactUsPage />;
}

export async function getServerSideProps() {
  return {
    props: {
      page: null,
    },
  };
}
