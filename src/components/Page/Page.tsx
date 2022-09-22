import config from '@config/index';
import classNames from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { PropsWithChildren, useEffect, useRef } from 'react';
import css from './Page.module.css';

const preventDefault = (e: any) => {
  e.preventDefault();
};

type TPageProps = {
  className?: string;
  scrollingDisabled?: boolean;
  title: string;
  description: string;
  previewImage?: any;
  currentUrl?: string;
};

const Page: React.FC<PropsWithChildren<TPageProps>> = ({
  className,
  children,
  scrollingDisabled,
  title,
  description,
  currentUrl,
  previewImage = 'https://dwybw5237mk3a.cloudfront.net/hero_image_b682105227.jpg',
}) => {
  const scrollPosition = useRef<number>(0);
  const scrollingDisabledRef = useRef<boolean | undefined>(false);
  const contentDiv = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const scrollingDisabledChanged = (
    currentScrollingDisabled: boolean | undefined,
  ) => {
    if (
      currentScrollingDisabled &&
      currentScrollingDisabled !== scrollingDisabledRef.current
    ) {
      // Update current scroll position, if scrolling is disabled (e.g. modal is open)
      scrollPosition.current =
        window.pageYOffset || document.documentElement.scrollTop;
      scrollingDisabledRef.current = currentScrollingDisabled;
    } else if (currentScrollingDisabled !== scrollingDisabledRef.current) {
      scrollingDisabledRef.current = currentScrollingDisabled;
    }
  };

  const classes = classNames(css.root, className, {
    [css.scrollingDisabled]: scrollingDisabled,
  });

  scrollingDisabledChanged(scrollingDisabled);

  const canonicalRootURL = config.baseUrl;
  const canonicalPath = router.asPath;
  const canonicalUrl = `${canonicalRootURL}${canonicalPath}`;

  const siteTitle = title || 'Elements for Life';

  const schemaDescription = description || 'Description';

  const metaDescription = schemaDescription;

  const scrollPositionStyles = scrollingDisabled
    ? { marginTop: `${-1 * scrollPosition.current}px` }
    : {};

  // If scrolling is not disabled, but content element has still scrollPosition set
  // in style attribute, we scrollTo scrollPosition.
  const hasMarginTopStyle =
    contentDiv.current && contentDiv.current.style.marginTop;
  if (!scrollingDisabled && hasMarginTopStyle) {
    window.requestAnimationFrame(() => {
      window.scrollTo(0, scrollPosition.current);
    });
  }

  useEffect(() => {
    // By default a dropped file is loaded in the browser window as a
    // file URL. We want to prevent this since it might loose a lot of
    // data the user has typed but not yet saved. Preventing requires
    // handling both dragover and drop events.
    document.addEventListener('dragover', preventDefault);
    document.addEventListener('drop', preventDefault);

    // Remove duplicated server-side rendered page schema.
    // It's in <body> to improve initial rendering performance,
    // but after web app is initialized, react-helmet-async operates with <head>
    const pageSchema = document.getElementById('page-schema');
    if (pageSchema) {
      pageSchema.remove();
    }

    return () => {
      document.removeEventListener('dragover', preventDefault);
      document.removeEventListener('drop', preventDefault);
    };
  }, []);

  return (
    <div className={classes}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={metaDescription} />

        {/* Open Graph */}
        <meta
          property="og:url"
          content={currentUrl || canonicalUrl}
          key="ogurl"
        />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta
          property="og:site_name"
          content={config.siteName}
          key="ogsitename"
        />
        <meta property="og:title" content={siteTitle} key="ogtitle" />
        <meta
          property="og:description"
          content={metaDescription}
          key="ogdesc"
        />
      </Head>
      <div
        className={css.content}
        style={scrollPositionStyles}
        ref={c => {
          contentDiv.current = c;
        }}>
        {children}
      </div>
    </div>
  );
};

export default Page;
