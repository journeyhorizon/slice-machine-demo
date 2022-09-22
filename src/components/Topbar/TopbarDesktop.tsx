import IconLogo from '@src/components/IconLogo/IconLogo';
import NamedLink from '@src/components/NamedLink/NamedLink';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import TopbarSearchForm from './form/TopbarSearchForm';
import css from './TopbarDesktop.module.scss';

type TTopbarDesktopProps = {
  className?: string;
};

const TopbarDesktop: React.FC<TTopbarDesktopProps> = ({ className }) => {
  const classes = classNames(css.root, className);

  return (
    <div className={classes}>
      <NamedLink name="HomePage" className={css.logoWrapper}>
        <IconLogo className={css.logo} />
      </NamedLink>
      <TopbarSearchForm />
      <NamedLink name="HomePage" className={css.link}>
        <FormattedMessage
          id="TopbarDesktop.browseClass"
          defaultMessage="Browse all classes"
        />
      </NamedLink>
      <div className={css.links}>
        <NamedLink name="SignupPage" className={css.link}>
          <FormattedMessage
            id="TopbarDesktop.signup"
            defaultMessage="Sign up"
          />
        </NamedLink>
        <NamedLink name="LoginPage" className={css.link}>
          <FormattedMessage id="TopbarDesktop.login" defaultMessage="Log in" />
        </NamedLink>
      </div>
    </div>
  );
};

export default TopbarDesktop;
