/**
 * This is a wrapper component for different Layouts.
 * Navigational 'aside' content should be added to this wrapper.
 */
import { useViewport } from '@utils/contextHelper';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import LayoutWrapperSideNav from '../LayoutWrapperSideNav/LayoutWrapperSideNav';

const MAX_HORIZONTAL_NAV_SCREEN_WIDTH = 1023;

type LayoutWrapperMembershipSideNavProps = {
  children?: React.ReactNode;
  className?: string;
  rootClassName?: string;
  currentTab?: string;
};

const scrollToTab = (currentTab: string | undefined) => {
  const el = document.querySelector(`#${currentTab}Tab`);

  if (el) {
    el.scrollIntoView({
      block: 'end',
      inline: 'end',
      behavior: 'smooth',
    });
  }
};

const LayoutWrapperMembershipSideNav = (
  props: LayoutWrapperMembershipSideNavProps,
): JSX.Element => {
  const { currentTab } = props;

  let hasScrolledToTab = false;

  const { width } = useViewport();
  const hasViewport = width > 0;
  const hasHorizontalTabLayout =
    hasViewport && width <= MAX_HORIZONTAL_NAV_SCREEN_WIDTH;
  const hasVerticalTabLayout =
    hasViewport && width > MAX_HORIZONTAL_NAV_SCREEN_WIDTH;
  const hasFontsLoaded =
    hasViewport && document.documentElement.classList.contains('fontsLoaded');

  // Check if scrollToTab call is needed (tab is not visible on mobile)
  if (hasVerticalTabLayout) {
    hasScrolledToTab = true;
  } else if (hasHorizontalTabLayout && !hasScrolledToTab && hasFontsLoaded) {
    scrollToTab(currentTab);
    hasScrolledToTab = true;
  }

  const tabs = [
    {
      text: (
        <FormattedMessage
          id="LayoutWrapperMembershipSideNav.membershipPageTabTitle"
          defaultMessage={'Membership details'}
        />
      ),
      selected: currentTab === 'MembershipPage',
      id: 'MembershipPageTab',
      linkProps: {
        name: 'MembershipPage',
      },
    },
    {
      text: (
        <FormattedMessage
          id="LayoutWrapperMembershipSideNav.paymentMethodPageTabTitle"
          defaultMessage="Payment method"
        />
      ),
      selected: currentTab === 'PaymentMethodPage',
      id: 'PaymentMethodPageTab',
      linkProps: {
        name: 'PaymentMethodPage',
      },
    },
  ];
  // TODO: check error type
  return <LayoutWrapperSideNav tabs={tabs} />;
};

export default LayoutWrapperMembershipSideNav;
