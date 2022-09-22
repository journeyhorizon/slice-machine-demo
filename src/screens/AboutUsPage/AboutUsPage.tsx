import { TAboutUsProps } from '@data/staticPage';
import Footer from '@src/components/Footer/Footer';
import LayoutWrapperFooter from '@src/components/LayoutWrapperFooter/LayoutWrapperFooter';
import LayoutWrapperMain from '@src/components/LayoutWrapperMain/LayoutWrapperMain';
import LayoutWrapperTopbar from '@src/components/LayoutWrapperTopbar/LayoutWrapperTopbar';
import Page from '@src/components/Page/Page';
import Topbar from '@src/components/Topbar/Topbar';
import css from './AboutUsPage.module.scss';
import { components } from '../../../slices';
import { SliceZone } from '@prismicio/react';

export default function AboutUsPage(props: TAboutUsProps) {
  const title = 'About Us | Elements4Life';
  const description = 'About Us | Elements4Life';
  const { page } = props;

  return (
    <Page title={title} description={description}>
      <LayoutWrapperTopbar>
        <Topbar />
      </LayoutWrapperTopbar>
      <LayoutWrapperMain>
        <div className={css.container}>
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </LayoutWrapperMain>
      <LayoutWrapperFooter>
        <Footer />
      </LayoutWrapperFooter>
    </Page>
  );
}
