import Button from '@src/components/Button/Button';
import FieldSelect from '@src/components/FieldSelect/FieldSelect';
import FieldTextInput from '@src/components/FieldTextInput/FieldTextInput';
import { TClub } from '@utils/types';
import {
  composeValidators,
  emailFormatValid,
  required,
} from '@utils/validators';
import isEqual from 'lodash/isEqual';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { TContactUsInformation } from './ContactUsPage';
import css from './ContactUsPage.module.scss';

type TContactFormProps = {
  id?: string;
  onSubmit?: Function;
  isSubmitting: boolean;
  submitError?: string;
  submittedValues?: TContactUsInformation | null;
  submitSucceed: boolean;
  clubList?: TClub[];
};

const ContactForm: React.FC<TContactFormProps> = ({
  id,
  isSubmitting,
  onSubmit = () => null,
  submitError,
  submittedValues,
  submitSucceed,
  clubList,
}) => {
  const intl = useIntl();

  const { control, watch, reset, formState, handleSubmit } = useForm({
    mode: 'all',
  });

  const values = watch();

  const disabledSubmit = !formState.isValid;
  const submittedOnce =
    !!submittedValues && Object.keys(submittedValues).length > 0;
  const pristineSinceLastSubmit =
    submittedOnce && isEqual(values, submittedValues);
  const submitDisabled = !formState.isValid || pristineSinceLastSubmit;
  const hasSubmittedError = submitError && !isSubmitting;

  const handleSubmitForm = async (values: TContactUsInformation) => {
    if (!disabledSubmit) {
      await onSubmit(values);
      reset({
        club: '',
        lastName: '',
        firstName: '',
        email: '',
        inquiry: '',
      });
    }
  };

  const clubLabel = intl.formatMessage({
    id: 'ContactUsPage.clubLabel',
    defaultMessage: 'Club',
  });
  const clubRequiredMessage = intl.formatMessage({
    id: 'ContactUsPage.clubRequiredMessage',
    defaultMessage: 'Club is required',
  });
  const firstNameLabel = intl.formatMessage({
    id: 'ContactUsPage.firstNameLabel',
    defaultMessage: 'First name',
  });
  const firstNamePlaceholder = intl.formatMessage({
    id: 'ContactUsPage.firstNamePlaceholder',
    defaultMessage: 'John',
  });
  const firstNameRequiredMessage = intl.formatMessage({
    id: 'ContactUsPage.firstNameRequiredMessage',
    defaultMessage: 'First name is required',
  });
  const lastNameLabel = intl.formatMessage({
    id: 'ContactUsPage.lastNameLabel',
    defaultMessage: 'Last name',
  });
  const lastNamePlaceholder = intl.formatMessage({
    id: 'ContactUsPage.lastNamePlaceholder',
    defaultMessage: 'John',
  });
  const lastNameRequiredMessage = intl.formatMessage({
    id: 'ContactUsPage.lastNameRequiredMessage',
    defaultMessage: 'Last name is required',
  });
  const emailLabel = intl.formatMessage({
    id: 'ContactUsPage.emailLabel',
    defaultMessage: 'Email',
  });
  const emailPlaceholder = intl.formatMessage({
    id: 'ContactUsPage.emailPlaceholder',
    defaultMessage: 'john@domain.com',
  });
  const emailRequiredMessage = intl.formatMessage({
    id: 'ContactUsPage.emailRequiredMessage',
    defaultMessage: 'Email is required',
  });
  const inquiryLabel = intl.formatMessage({
    id: 'ContactUsPage.inquiryLabel',
    defaultMessage: 'Inquiry',
  });
  const inquiryPlaceholder = intl.formatMessage({
    id: 'ContactUsPage.inquiryPlaceholder',
    defaultMessage: 'Enter your inquiry here...',
  });
  const emailValidMessage = intl.formatMessage({
    id: 'ContactUsPage.emailValidMessage',
    defaultMessage: 'Email is not valid',
  });

  const submitSuccessMessage = intl.formatMessage({
    id: 'ContactUsPage.submitSuccessMessage',
    defaultMessage: 'Thank you, your information has been saved. ',
  });

  return (
    <form
      id={id}
      className={css.form}
      onSubmit={handleSubmit(handleSubmitForm as any)}>
      <FieldSelect
        className={css.field}
        id="club"
        name="club"
        label={clubLabel}
        control={control}
        rules={{
          validate: required(clubRequiredMessage),
        }}>
        <option value="" disabled>
          Select a club
        </option>
        {clubList?.map((item, index) => (
          <option key={index} value={item.slug}>
            {item.name}
          </option>
        ))}
      </FieldSelect>
      <div className={css.nameFields}>
        <FieldTextInput
          className={css.firstName}
          id="firstName"
          name="firstName"
          label={firstNameLabel}
          control={control}
          placeholder={firstNamePlaceholder}
          rules={{
            validate: required(firstNameRequiredMessage),
          }}
        />
        <FieldTextInput
          className={css.lastName}
          id="lastName"
          name="lastName"
          label={lastNameLabel}
          control={control}
          placeholder={lastNamePlaceholder}
          rules={{
            validate: required(lastNameRequiredMessage),
          }}
        />
      </div>
      <FieldTextInput
        className={css.field}
        id="email"
        name="email"
        type="text"
        label={emailLabel}
        control={control}
        placeholder={emailPlaceholder}
        rules={{
          // @ts-ignore
          validate: composeValidators(
            required(emailRequiredMessage),
            emailFormatValid(emailValidMessage),
          ),
        }}
      />
      <FieldTextInput
        className={css.field}
        id="inquiry"
        name="inquiry"
        type="text"
        label={inquiryLabel}
        control={control}
        placeholder={inquiryPlaceholder}
      />
      {hasSubmittedError && <p className={css.error}>{submitError}</p>}
      {submitSucceed && <p className={css.success}>{submitSuccessMessage}</p>}
      <Button
        loading={isSubmitting}
        disabled={submitDisabled}
        className={css.formBtn}
        type="submit"
        ready={pristineSinceLastSubmit}>
        <FormattedMessage id="ContactUsPage.submit" defaultMessage="Submit" />
      </Button>
    </form>
  );
};

export default ContactForm;
