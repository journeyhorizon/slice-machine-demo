import Button from '@src/components/Button/Button';
import Footer from '@src/components/Footer/Footer';
import IconConnectGoogle from '@src/components/IconConnectGoogle/IconConnectGoogle';
import IconFacebook from '@src/components/IconFacebook/IconFacebook';
import LayoutWrapperFooter from '@src/components/LayoutWrapperFooter/LayoutWrapperFooter';
import LayoutWrapperMain from '@src/components/LayoutWrapperMain/LayoutWrapperMain';
import LayoutWrapperTopbar from '@src/components/LayoutWrapperTopbar/LayoutWrapperTopbar';
import Page from '@src/components/Page/Page';
import Topbar from '@src/components/Topbar/Topbar';
import { FormattedMessage } from 'react-intl';
import LoginForm from './form/LoginForm';
import css from './LoginPage.module.scss';

export default function LoginPage() {
  const title = 'Sign In | Elements4Life';
  const description = 'Sign In | Elements4Life';

  return (
    <Page title={title} description={description}>
      <LayoutWrapperTopbar>
        <Topbar />
      </LayoutWrapperTopbar>
      <LayoutWrapperMain>
        <div className={css.container}>
          <h1 className={css.pageTitle}>
            <FormattedMessage
              id="LoginPage.Login.title"
              defaultMessage="Login"
            />
          </h1>
          <LoginForm onSubmit={() => {}} inProgress={false}></LoginForm>
          <div className={css.separatedLine}>
            <div className={css.line}></div>
            <div className={css.or}>
              <FormattedMessage id="LoginPage.or" defaultMessage="or" />
            </div>
            <div className={css.line}></div>
          </div>
          <div className={css.socialLogin}>
            <Button
              className={css.socialButton}
              type="button"
              onClick={() => null}>
              <IconConnectGoogle className={css.icon} />
              <FormattedMessage
                id="LoginPage.loginWithGoogle"
                defaultMessage="Login with Google"
              />
            </Button>
            <Button
              className={css.socialButton}
              type="button"
              onClick={() => {}}>
              <IconFacebook className={css.facebookIcon} />
              <FormattedMessage
                id="LoginPage.loginWithFacebook"
                defaultMessage="Login with Facebook"
              />
            </Button>
          </div>
        </div>
      </LayoutWrapperMain>
      <LayoutWrapperFooter>
        <Footer />
      </LayoutWrapperFooter>
    </Page>
  );
}
