import Drawer from '@src/components/Drawer/Drawer';
import NamedLink from '@src/components/NamedLink/NamedLink';
import { MouseEventHandler } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import css from './TopbarMobile.module.scss';

type TTopbarMobileMenuProps = {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLElement>;
};

const TopbarMobileMenu: React.FC<TTopbarMobileMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const intl = useIntl();

  const signupLink = (
    <NamedLink name="SignupPage">
      {intl.formatMessage({
        id: 'TopbarMobileMenu.signupLink',
        defaultMessage: 'Sign up',
      })}
    </NamedLink>
  );

  const loginLink = (
    <NamedLink name="LoginPage">
      {intl.formatMessage({
        id: 'TopbarMobileMenu.loginLink',
        defaultMessage: 'Log in',
      })}
    </NamedLink>
  );

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <div className={css.authenticationGreeting}>
        <FormattedMessage
          id="TopbarMobileMenu.authenticationGreeting"
          defaultMessage="Hello there,{newLine} would you like to{newLine} {signupLink} or {loginLink}?"
          values={{
            signupLink,
            loginLink,
            newLine: <br />,
          }}
        />
      </div>
    </Drawer>
  );
};

export default TopbarMobileMenu;
