import { TFAQProps } from '@data/staticPage';
import Button from '@src/components/Button/Button';
import Footer from '@src/components/Footer/Footer';
import LayoutWrapperFooter from '@src/components/LayoutWrapperFooter/LayoutWrapperFooter';
import LayoutWrapperMain from '@src/components/LayoutWrapperMain/LayoutWrapperMain';
import LayoutWrapperTopbar from '@src/components/LayoutWrapperTopbar/LayoutWrapperTopbar';
import Page from '@src/components/Page/Page';
import Topbar from '@src/components/Topbar/Topbar';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import css from './FAQPage.module.scss';
import { components } from '../../../slices';
import { SliceZone } from '@prismicio/react';

const FAQPage: React.FC<TFAQProps> = ({ page }) => {
  const title = 'FAQs | Elements4Life';
  const description = 'FAQs | Elements4Life';

  return (
    <Page title={title} description={description}>
      <LayoutWrapperTopbar>
        <Topbar />
      </LayoutWrapperTopbar>
      <LayoutWrapperMain>
        <div className={css.container}>
          <SliceZone slices={page.data.slices} components={components} />
          <Button className={css.haveMoreBtn}>
            <FormattedMessage
              id="FAQPage.haveMoreBtn"
              defaultMessage="Have more questions"
            />
          </Button>
        </div>
      </LayoutWrapperMain>
      <LayoutWrapperFooter>
        <Footer />
      </LayoutWrapperFooter>
    </Page>
  );
};

export default FAQPage;
