import routeConfiguration from '@config/routeConfiguration';
import Button from '@src/components/Button/Button';
import FieldTextInput from '@src/components/FieldTextInput/FieldTextInput.new';
import NamedLink from '@src/components/NamedLink/NamedLink';
import { createResourceLocatorString } from '@utils/routes';
import {
  composeValidators,
  emailFormatValid,
  required,
} from '@utils/validators';
import { useRouter } from 'next/router';
import { Form, FormProps, FormRenderProps } from 'react-final-form';
import { FormattedMessage, useIntl } from 'react-intl';
import css from './LoginForm.module.scss';

export type LoginFormValues = {
  email: string;
  password: string;
};

type LoginFormProps = FormProps<LoginFormValues> & {
  inProgress: boolean;
};

type LoginFormComponentProps = FormRenderProps<LoginFormValues> & {
  inProgress?: boolean;
};

const LoginFormComponent = ({
  handleSubmit,
  invalid,
  inProgress,
  children,
}: LoginFormComponentProps) => {
  const intl = useIntl();
  const router = useRouter();

  const handleBack = () => {
    router.push(
      createResourceLocatorString('HomePage', routeConfiguration, {}, {}),
    );
  };

  const emailLabel = intl.formatMessage({
    id: 'LoginForm.emailLabel',
    defaultMessage: 'Email',
  });
  const emailPlaceholder = intl.formatMessage({
    id: 'LoginForm.emailPlaceholder',
    defaultMessage: 'john.doe@example.com',
  });
  const emailRequiredMessage = intl.formatMessage({
    id: 'LoginForm.emailRequiredMessage',
    defaultMessage: 'Please provide email address',
  });
  const emailInvalidMessage = intl.formatMessage({
    id: 'LoginForm.emailInvalidMessage',
    defaultMessage: 'Please provide a valid email address',
  });

  // Password
  const passwordLabel = intl.formatMessage({
    id: 'LoginForm.passwordLabel',
    defaultMessage: 'Password',
  });
  const passwordPlaceholder = intl.formatMessage({
    id: 'LoginForm.passwordPlaceholder',
    defaultMessage: 'Enter your password',
  });
  const passwordRequiredMessage = intl.formatMessage({
    id: 'LoginForm.passwordRequiredMessage',
    defaultMessage: 'Please provide password',
  });
  return (
    <form onSubmit={handleSubmit} className={css.root}>
      <>
        <FieldTextInput
          type="text"
          name="email"
          id="email"
          className={css.field}
          label={emailLabel}
          placeholder={emailPlaceholder}
          validate={composeValidators(
            required(emailRequiredMessage),
            emailFormatValid(emailInvalidMessage),
          )}
        />
        <FieldTextInput
          className={css.field}
          id="password"
          name="password"
          type="password"
          label={passwordLabel}
          placeholder={passwordPlaceholder}
          validate={required(passwordRequiredMessage)}
        />
        {children}
        <div className={css.bottomWrapper}>
          <p className={css.forgotPassword}>
            <FormattedMessage
              id="LoginForm.forgotPassword"
              defaultMessage="Forgot your password?"
            />
            &nbsp;
            <NamedLink name="LoginPage">
              <FormattedMessage
                id="LoginForm.noProblem"
                defaultMessage="No problem."
              />
            </NamedLink>
          </p>
          <div className={css.actions}>
            <button className={css.back} type="button" onClick={handleBack}>
              <FormattedMessage id="LoginForm.back" defaultMessage="Back" />
            </button>
            <Button
              className={css.submit}
              type="submit"
              disabled={invalid}
              size="small"
              loading={inProgress}>
              <FormattedMessage
                id="LoginForm.submit"
                defaultMessage="Continue"
              />
            </Button>
          </div>
        </div>
      </>
    </form>
  );
};

const LoginForm: React.FC<LoginFormProps> = props => {
  return <Form {...props} component={LoginFormComponent} />;
};

export default LoginForm;
