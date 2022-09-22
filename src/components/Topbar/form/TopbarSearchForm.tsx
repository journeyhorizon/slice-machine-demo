import IconSearch from '@src/components/IconSearch/IconSearch';
import { useRouter } from 'next/router';
import React, { KeyboardEventHandler, useMemo } from 'react';
import { Form } from 'react-final-form';
import css from './TopbarSearchForm.module.scss';
import FieldTextInputNew from '../../FieldTextInput/FieldTextInput.new';
import { FormattedMessage, useIntl } from 'react-intl';
import { createResourceLocatorString } from '@utils/routes';
import routeConfiguration from '@config/routeConfiguration';
import Button from '@src/components/Button/Button';

const KEY_CODE_ENTER = 'Enter';

type TopbarSearchFormProps = {
  onClose?: (params?: any) => any;
};

const TopbarSearchForm = ({ onClose }: TopbarSearchFormProps) => {
  const router = useRouter();
  const intl = useIntl();
  const { query: urlQueryParams } = router;
  const { keywords: initialKeywords = '' } = urlQueryParams || {};
  const searchInputPlaceholder = intl.formatMessage({
    id: 'TopbarDesktop.searchKeyword',
    defaultMessage: 'Search all classes (e.g. yoga, strength, dumbbells)…',
  });

  const initialValues = useMemo(
    () => ({
      keywords: initialKeywords,
    }),
    [initialKeywords],
  );

  const handleSubmitForm = (values: { keywords: string }) => {
    const { keywords } = values || {};
    router.push(
      createResourceLocatorString(
        'HomePage',
        routeConfiguration,
        {},
        { keywords },
      ),
    );
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
      render={({ handleSubmit, values }) => {
        const handleKeywordEnter: KeyboardEventHandler<HTMLInputElement> =
          e => {
            if (e.key === KEY_CODE_ENTER && values?.keywords?.length > 0) {
              handleSubmit();
            }
          };
        return (
          <>
            <div className={css.searchForm}>
              <IconSearch
                className={css.searchIcon}
                size="bold"
                onClick={handleSubmit}
              />
              <FieldTextInputNew
                id="TopbarKeywordSearch"
                className={css.field}
                inputClassName={css.searchInput}
                name="keywords"
                placeholder={searchInputPlaceholder}
                autoComplete={'off'}
                onKeyUp={handleKeywordEnter}
              />
            </div>
            <Button
              className={css.submit}
              title={'Search'}
              onClick={handleSubmit}>
              <FormattedMessage
                id="TopbarMobile.searchBtn"
                defaultMessage="Search"
              />
            </Button>
          </>
        );
      }}
    />
  );
};

export default TopbarSearchForm;
