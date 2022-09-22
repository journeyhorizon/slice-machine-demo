import LoginPage from '@src/screens/LoginPage/LoginPage';

export default function LoginRoute() {
  return <LoginPage />;
}

export async function getServerSideProps() {
  return {
    props: {
      page: null,
    },
  };
}
