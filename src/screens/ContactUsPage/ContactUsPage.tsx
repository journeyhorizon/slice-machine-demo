import { useQueryStaticContent } from '@data/staticPage';
import Footer from '@src/components/Footer/Footer';
import LayoutWrapperFooter from '@src/components/LayoutWrapperFooter/LayoutWrapperFooter';
import LayoutWrapperMain from '@src/components/LayoutWrapperMain/LayoutWrapperMain';
import LayoutWrapperTopbar from '@src/components/LayoutWrapperTopbar/LayoutWrapperTopbar';
import Page from '@src/components/Page/Page';
import Topbar from '@src/components/Topbar/Topbar';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import ContactForm from './ContactForm';
import css from './ContactUsPage.module.scss';
import dynamic from 'next/dynamic';

const SectionStaticPageHero = dynamic(
  () => import('@src/components/SectionStaticPageHero/SectionStaticPageHero'),
);

export type TContactUsInformation = {
  club: string;
  firstName: string;
  lastName: string;
  email: string;
  inquiry?: string;
};

export default function ContactUsPage() {
  const title = 'Contact Us | Elements4Life';
  const description = 'Contact Us | Elements4Life';
  useState<TContactUsInformation | null>(null);
  const clubList = useQueryStaticContent({ typePage: 'club-manages' })?.data;

  const intl = useIntl();
  const formId = 'contactForm';

  const heroTitle = intl.formatMessage({
    id: 'ContactUsPage.heroTitle',
    defaultMessage: 'Contact us',
  });

  return (
    <Page title={title} description={description}>
      <LayoutWrapperTopbar>
        <Topbar />
      </LayoutWrapperTopbar>
      <LayoutWrapperMain>
        <div className={css.container}>
          <SectionStaticPageHero title={heroTitle} />
          <ContactForm
            id={formId}
            submitError={''}
            isSubmitting={false}
            onSubmit={() => {}}
            submittedValues={null}
            submitSucceed={false}
            clubList={clubList}
          />
        </div>
      </LayoutWrapperMain>
      <LayoutWrapperFooter>
        <Footer />
      </LayoutWrapperFooter>
    </Page>
  );
}
