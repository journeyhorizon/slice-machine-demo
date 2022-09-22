import Button from '@src/components/Button/Button';
import FieldCheckbox from '@src/components/FieldCheckbox/FieldCheckbox';
import FieldTextInput from '@src/components/FieldTextInput/FieldTextInput.new';
import NamedLink from '@src/components/NamedLink/NamedLink';
import {
  composeValidators,
  emailFormatValid,
  required,
} from '@utils/validators';
import { Form, FormProps, FormRenderProps } from 'react-final-form';
import { FormattedMessage, useIntl } from 'react-intl';
import css from './SignUpForm.module.scss';

export type SignUpFormValues = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  agreeTheTerms: string;
};

type SignUpFormComponentProps = FormRenderProps<SignUpFormValues> & {
  inProgress?: boolean;
};

const SignUpFormComponent = ({
  invalid,
  handleSubmit,
  values,
  inProgress,
  children,
}: SignUpFormComponentProps) => {
  const intl = useIntl();
  const { agreeTheTerms } = values;
  const disabled = invalid || !agreeTheTerms;

  const emailLabel = intl.formatMessage({
    id: 'SignupForm.emailLabel',
    defaultMessage: 'Email',
  });
  const emailPlaceholder = intl.formatMessage({
    id: 'SignupForm.emailPlaceholder',
    defaultMessage: 'john.doe@example.coom',
  });
  const emailRequiredMessage = intl.formatMessage({
    id: 'SignupForm.emailRequiredMessage',
    defaultMessage: 'Please provide email address',
  });
  const emailInvalidMessage = intl.formatMessage({
    id: 'SignupForm.emailInvalidMessage',
    defaultMessage: 'Please provide a valid email address',
  });

  // First name
  const firstNameLabel = intl.formatMessage({
    id: 'SignupForm.firstNameLabel',
    defaultMessage: 'First name',
  });
  const firstNamePlaceholder = intl.formatMessage({
    id: 'SignupForm.firstNamePlaceholder',
    defaultMessage: 'John',
  });
  const firstNameRequiredMessage = intl.formatMessage({
    id: 'SignupForm.firstNameRequiredMessage',
    defaultMessage: 'Please provide First name',
  });

  // Last name
  const lastNameLabel = intl.formatMessage({
    id: 'SignupForm.lastNameLabel',
    defaultMessage: 'Last name',
  });
  const lastNamePlaceholder = intl.formatMessage({
    id: 'SignupForm.lastNamePlaceholder',
    defaultMessage: 'Doe',
  });
  const lastNameRequiredMessage = intl.formatMessage({
    id: 'SignupForm.lastNameRequiredMessage',
    defaultMessage: 'Please provide Last name',
  });

  // Password
  const passwordLabel = intl.formatMessage({
    id: 'SignupForm.passwordLabel',
    defaultMessage: 'Password',
  });
  const passwordPlaceholder = intl.formatMessage({
    id: 'SignupForm.passwordPlaceholder',
    defaultMessage: 'Enter your password',
  });
  const passwordRequiredMessage = intl.formatMessage({
    id: 'SignupForm.passwordRequiredMessage',
    defaultMessage: 'Please provide password',
  });

  const conditionTermRequiredMessage = intl.formatMessage({
    id: 'SignupForm.conditionTermRequiredMessage',
    defaultMessage: 'Please agree this term to continue.',
  });
  // Agree the term
  const agreeTheTermsText = (
    <span className={css.agreeTheTermsLabel}>
      <FormattedMessage
        id="SignupForm.agreeTheTerms"
        defaultMessage="I agree to the {termsAndConditions}"
        values={{
          termsAndConditions: (
            <NamedLink name="TermsAndConditionsPage">
              <strong>
                {intl.formatMessage({
                  id: 'SignupForm.termsAndConditions',
                  defaultMessage: 'terms and conditions',
                })}
              </strong>
            </NamedLink>
          ),
        }}
      />
    </span>
  );

  return (
    <form className={css.root} onSubmit={handleSubmit}>
      <>
        <FieldTextInput
          className={css.field}
          id="email"
          name="email"
          label={emailLabel}
          placeholder={emailPlaceholder}
          validate={composeValidators(
            required(emailRequiredMessage),
            emailFormatValid(emailInvalidMessage),
          )}
        />
        <div className={css.nameFields}>
          <FieldTextInput
            className={css.firstName}
            id="firstName"
            name="firstName"
            label={firstNameLabel}
            placeholder={firstNamePlaceholder}
            validate={required(firstNameRequiredMessage)}
          />
          <FieldTextInput
            className={css.lastName}
            id="lastName"
            name="lastName"
            label={lastNameLabel}
            placeholder={lastNamePlaceholder}
            validate={required(lastNameRequiredMessage)}
          />
        </div>
        <FieldTextInput
          className={css.field}
          id="password"
          name="password"
          type="password"
          label={passwordLabel}
          placeholder={passwordPlaceholder}
          validate={required(passwordRequiredMessage)}
        />
        <div>
          <FieldCheckbox
            id="agreeTheTerms"
            name="agreeTheTerms"
            label={agreeTheTermsText}
            validate={required(conditionTermRequiredMessage)}
          />
        </div>
        {children}
        <div className={css.bottomWrapper}>
          <button className={css.cancel}>
            <FormattedMessage id="SignupPage.Form.back" defaultMessage="Back" />
          </button>
          <Button
            className={css.submit}
            type="submit"
            disabled={disabled}
            loading={inProgress}>
            <FormattedMessage
              id="SignupPage.Form.submit"
              defaultMessage="Continue"
            />
          </Button>
        </div>
      </>
    </form>
  );
};

type SignUpFormProps = FormProps<SignUpFormValues> & {
  inProgress: boolean;
};

const SignUpForm: React.FC<SignUpFormProps> = props => (
  <Form {...props} component={SignUpFormComponent} />
);

export default SignUpForm;
