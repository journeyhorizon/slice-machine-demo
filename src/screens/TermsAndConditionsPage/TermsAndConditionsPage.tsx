import { TTermAndConditionProps } from '@data/staticPage';
import Footer from '@src/components/Footer/Footer';
import LayoutWrapperFooter from '@src/components/LayoutWrapperFooter/LayoutWrapperFooter';
import LayoutWrapperMain from '@src/components/LayoutWrapperMain/LayoutWrapperMain';
import LayoutWrapperTopbar from '@src/components/LayoutWrapperTopbar/LayoutWrapperTopbar';
import Page from '@src/components/Page/Page';
import Topbar from '@src/components/Topbar/Topbar';
import { FormattedMessage, useIntl } from 'react-intl';
import css from './TermsAndConditionsPage.module.scss';
import dynamic from 'next/dynamic';

const SectionStaticPageHero = dynamic(
  () => import('@src/components/SectionStaticPageHero/SectionStaticPageHero'),
);

export default function TermsAndConditionsPage(props: TTermAndConditionProps) {
  const title = 'Terms & Conditions | Elements4Life';
  const description = 'Terms & Conditions | Elements4Life';
  const {
    title: titlePage,
    description: descriptionPage,
    termConditionList,
  } = props;

  const intl = useIntl();
  const heroTitle = intl.formatMessage({
    id: 'TermsAndConditionsPage.heroTitle',
    defaultMessage: titlePage,
  });
  const heroDescription = intl.formatMessage(
    {
      id: 'TermsAndConditionsPage.heroDescription',
      defaultMessage: descriptionPage,
    },
    {
      breakLine: <span className={css.breakLine}></span>,
    },
  );
  return (
    <Page title={title} description={description}>
      <LayoutWrapperTopbar>
        <Topbar />
      </LayoutWrapperTopbar>
      <LayoutWrapperMain>
        <div className={css.container}>
          <SectionStaticPageHero
            title={heroTitle}
            description={heroDescription}
          />
          <div className={css.content}>
            {termConditionList?.map((item: any) => (
              <div key={item.id} className={css.contentItem}>
                {item.title && (
                  <div className={css.contentTitle}>
                    <FormattedMessage
                      id={`TermsAndConditionsPage.TitleTermCondition${item.id}`}
                      defaultMessage={item.title}
                    />
                  </div>
                )}
                {item.description && (
                  <div className={css.contentDescription}>
                    <FormattedMessage
                      id={`TermsAndConditionsPage.DescriptionTermCondition${item.id}`}
                      defaultMessage={item.description}
                      values={{
                        breakLine: <span className={css.breakLine}></span>,
                        email: (
                          <a
                            href="mailto:GetStarted@elements4life.com.au"
                            className={css.emailLink}
                            target="_blank"
                            rel="noreferrer">
                            GetStarted@elements4life.com.au
                          </a>
                        ),
                      }}
                    />
                  </div>
                )}
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
