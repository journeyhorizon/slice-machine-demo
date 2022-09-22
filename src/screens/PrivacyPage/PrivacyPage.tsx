import { TPrivacyProps } from '@data/staticPage';
import Footer from '@src/components/Footer/Footer';
import LayoutWrapperFooter from '@src/components/LayoutWrapperFooter/LayoutWrapperFooter';
import LayoutWrapperMain from '@src/components/LayoutWrapperMain/LayoutWrapperMain';
import LayoutWrapperTopbar from '@src/components/LayoutWrapperTopbar/LayoutWrapperTopbar';
import Page from '@src/components/Page/Page';
import Topbar from '@src/components/Topbar/Topbar';
import { FormattedMessage, useIntl } from 'react-intl';
import css from './PrivacyPage.module.scss';
import dynamic from 'next/dynamic';

const SectionStaticPageHero = dynamic(
  () => import('@src/components/SectionStaticPageHero/SectionStaticPageHero'),
);

export default function PrivacyPage(props: TPrivacyProps) {
  const title = 'Privacy Policy | Elements4Life';
  const description = 'Privacy Policy | Elements4Life';
  const intl = useIntl();
  const { title: titlePage, privacyList } = props;

  const heroTitle = intl.formatMessage({
    id: 'PrivacyPage.heroTitle',
    defaultMessage: titlePage,
  });
  return (
    <Page title={title} description={description}>
      <LayoutWrapperTopbar>
        <Topbar />
      </LayoutWrapperTopbar>
      <LayoutWrapperMain>
        <div className={css.container}>
          <SectionStaticPageHero title={heroTitle} />
          <div className={css.content}>
            {privacyList?.map((item: any) => (
              <div key={item.id} className={css.contentItem}>
                <div className={css.contentTitle}>
                  <FormattedMessage
                    id={`PrivacyPage.titlePrivacy${item.id}`}
                    defaultMessage={item.title}
                  />
                </div>
                <div className={css.contentDescription}>
                  <FormattedMessage
                    id={`PrivacyPage.detailPrivacy${item.id}`}
                    values={{
                      breakLine: <span className={css.breakLine}></span>,
                      breakDot: <span className={css.breakDot}></span>,
                    }}
                    defaultMessage={item.privacy}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapperMain>
      <LayoutWrapperFooter>
        <Footer />
      </LayoutWrapperFooter>
    </Page>
  );
}
