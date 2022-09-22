export type TRouteItem = { path: string; auth?: boolean };
export type TRouteConfiguration = { [name: string]: TRouteItem };

const routeConfiguration: TRouteConfiguration = {
  HomePage: {
    path: '/',
  },
  SignupPage: {
    path: '/signup',
  },
  LoginPage: {
    path: '/login',
  },
  AboutUsPage: {
    path: '/about-us',
  },
  ContactUsPage: {
    path: '/contact-us',
  },
  MembershipDetailPage: {
    path: '/membership-detail',
  },
  FAQPage: {
    path: '/faq',
  },
  PrivacyPage: {
    path: '/privacy',
  },
  TermsAndConditionsPage: {
    path: '/terms-and-conditions',
  },
};

export default routeConfiguration;
