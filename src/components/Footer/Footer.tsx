import IconFacebook from '@src/components/IconFacebook/IconFacebook';
import IconInstagram from '@src/components/IconInstagram/IconInstagram';
import IconLogo from '@src/components/IconLogo/IconLogo';
import IconYoutube from '@src/components/IconYoutube/IconYoutube';
import NamedLink from '@src/components/NamedLink/NamedLink';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { useQueryStaticContent } from '@data/staticPage';
import get from 'lodash/get';

import css from './Footer.module.scss';
import ExternalLink from '@src/components/ExternalLink/ExternalLink';

type TFooterProps = {
  className?: string;
};

const Footer: React.FC<TFooterProps> = ({ className }) => {
  const classes = classNames(css.root, className);
  const response = useQueryStaticContent({ typePage: 'footer-hyperlinks' });
  const { facebook, instagram, youtube, shop } = get(response, 'data.attributes', {});

  return (
    <div className={classes}>
      <div className={css.content}>
        <div className={css.logoWrapper}>
          <NamedLink name="HomePage">
            <IconLogo height={60} width={150} />
          </NamedLink>
        </div>
        <div className={css.links}>
          <div className={css.groupLink}>
            <NamedLink className={css.link} name="AboutUsPage">
              <FormattedMessage
                id="Footer.aboutLink"
                defaultMessage="About us"
              />
            </NamedLink>
            <NamedLink className={css.link} name="FAQPage">
              <FormattedMessage id="Footer.faqLink" defaultMessage="FAQ" />
            </NamedLink>
            <NamedLink className={css.link} name="MembershipDetailPage">
              <FormattedMessage
                id="Footer.membershipDetailLink"
                defaultMessage="Memberships"
              />
            </NamedLink>
          </div>
          <div className={classNames(css.groupLink, css.groupLinkMiddle)}>
            <NamedLink className={css.link} name="PrivacyPage">
              <FormattedMessage
                id="Footer.privacyLink"
                defaultMessage="Privacy"
              />
            </NamedLink>
            <NamedLink className={css.link} name="TermsAndConditionsPage">
              <FormattedMessage
                id="Footer.termsAndConditionsLink"
                defaultMessage="Terms & Conditions"
              />
            </NamedLink>
            <NamedLink className={css.link} name="ContactUsPage">
              <FormattedMessage
                id="Footer.contactLink"
                defaultMessage="Contact us"
              />
            </NamedLink>
            <ExternalLink className={css.link} href={shop} typeOpen={"_blank"}>
              <FormattedMessage id="Footer.shopLink" defaultMessage="Shop" />
            </ExternalLink>
          </div>
        </div>
        <div className={css.socialLinks}>
          <div className={css.socialLinkTitle}>
            <FormattedMessage
              id="Footer.followUsOn"
              defaultMessage="Follow us on"
            />
          </div>
          <div className={css.icons}>
            <ExternalLink className={css.iconWrapper} href={instagram} typeOpen={"_blank"}>
              <IconInstagram className={css.icon} />
            </ExternalLink>
            <ExternalLink className={css.iconWrapper} href={facebook} typeOpen={"_blank"}>
              <IconFacebook className={css.icon} />
            </ExternalLink>
            <ExternalLink className={css.iconWrapper} href={youtube} typeOpen={"_blank"}>
              <IconYoutube className={css.icon} />
            </ExternalLink>
          </div>
        </div>
      </div>
      <div className={css.copyright}>
        <FormattedMessage
          id="Footer.copyright"
          defaultMessage="© Elements4Life Online, 2021. ALL RIGHTS RESERVED."
        />
      </div>
    </div>
  );
};

export default Footer;
