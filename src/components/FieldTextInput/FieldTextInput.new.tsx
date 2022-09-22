import {
  useCallback,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
} from 'react';
import classNames from 'classnames';
import { Field, FieldProps, FieldRenderProps } from 'react-final-form';
import css from './FieldTextInput.module.scss';
import ValidationError from '@src/components/ValidationError/ValidationError';

type FieldTextInputComponentProps = FieldRenderProps<string, HTMLInputElement> &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    inputClassName?: string;
    labelClassName?: string;
    label?: string;
    id?: string;
  };

type FieldTextInputProps = {
  inputClassName?: string;
  labelClassName?: string;
  label?: string;
  id: string;
  onUnmount?: () => void;
} & FieldProps<string, FieldTextInputComponentProps, HTMLInputElement>;

const FieldTextInputComponent = ({
  input,
  type,
  className,
  labelClassName,
  inputClassName,
  meta,
  label,
  onFocus,
  onBlur,
  onUnmount,
  id,
  icon,
  iconAction,
  classNameError,
  ...rest
}: FieldTextInputComponentProps) => {
  const { onFocus: inputFocus, onBlur: inputBlur, ...restInput } = input;
  const { valid, invalid, touched, error } = meta;
  const hasError = !!(touched && invalid && error);
  const isTextarea = type === 'textarea';

  const classes = classNames(css.root, className);
  const labelClasses = classNames(css.label, labelClassName);
  const inputClasses = classNames(
    css.input,
    {
      [css.inputSuccess]: valid,
      [css.inputError]: hasError,
      [css.textarea]: isTextarea,
    },
    inputClassName,
  );

  const handleFocus = useCallback<React.FocusEventHandler<HTMLInputElement>>(
    e => {
      inputFocus();
      if (typeof onFocus === 'function') {
        onFocus(e);
      }
    },
    [inputFocus, onFocus],
  );
  const handleBlur = useCallback<React.FocusEventHandler<HTMLInputElement>>(
    e => {
      inputBlur();
      if (typeof onBlur === 'function') {
        onBlur(e);
      }
    },
    [inputBlur, onBlur],
  );

  const inputProps = {
    className: inputClasses,
    ...restInput,
    ...rest,
    onFocus: handleFocus,
    onBlur: handleBlur,
    id,
  };

  const fieldMeta = { touched: hasError, error };

  return (
    <div className={classes}>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}
      <input {...inputProps} />
      {icon && <span className={css.iconInput} onClick={iconAction}>{icon}</span>}
      <ValidationError className={classNameError} fieldState={fieldMeta} />
    </div>
  );
};

const FieldTextInput: React.FC<FieldTextInputProps> = props => {
  const { onUnmount } = props;
  useEffect(() => {
    return () => {
      if (onUnmount) {
        onUnmount();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Field {...props} component={FieldTextInputComponent} />;
};

export default FieldTextInput;
