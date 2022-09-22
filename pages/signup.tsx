import SignupPage from '@src/screens/SignupPage/SignupPage';

export default function SignupRoute() {
  return <SignupPage />;
}

export async function getServerSideProps() {
  return {
    props: {
      page: null,
    },
  };
}
