import ValidationError from '@src/components/ValidationError/ValidationError';
import classNames from 'classnames';
import { FocusEventHandler, KeyboardEventHandler, LegacyRef } from 'react';
import { Control, useController, UseControllerProps } from 'react-hook-form';

import css from './FieldTextInput.module.scss';

interface TFieldTextInputProps {
  id?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  name: UseControllerProps['name'];
  control: Control<any>;
  defaultValue?: string;
  rules?: UseControllerProps['rules'];
  shouldUnregister?: UseControllerProps['shouldUnregister'];
  label?: string;
  onBlur?: FocusEventHandler<any>;
  type?: 'text' | 'textarea' | 'number' | 'password';
  placeholder?: string;
  autoComplete?: string;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  inputRef?: LegacyRef<HTMLInputElement>;
  min?: number;
  max?: number;
  step?: number;
}

const FieldTextInput: React.FC<TFieldTextInputProps> = ({
  id,
  className,
  inputClassName,
  labelClassName,
  name,
  control,
  defaultValue = '',
  rules,
  label,
  placeholder,
  onBlur: onCustomBlur = () => null,
  type = 'text',
  autoComplete,
  onKeyUp = () => null,
  inputRef,
  min,
  max,
  step,
}) => {
  const {
    field: { onBlur, ...inputProps },
    fieldState,
  } = useController({
    name,
    control,
    defaultValue,
    rules,
  });
  const isTextarea = type === 'textarea';

  const handleBlur = (e: any) => {
    onBlur();
    if (typeof onCustomBlur === 'function') {
      onCustomBlur(e);
    }
  };

  const classes = classNames(css.root, className);
  const labelClasses = classNames(css.label, labelClassName);
  const inputClasses = classNames(css.input, inputClassName, {
    [css.inputSuccess]: !fieldState.invalid && !!inputProps.value,
    [css.inputError]: fieldState.invalid,
    [css.textarea]: isTextarea,
  });

  return (
    <div className={classes}>
      {label && <label className={labelClasses}>{label}</label>}
      <input
        {...inputProps}
        id={id}
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onBlur={handleBlur}
        onKeyUp={onKeyUp}
        ref={inputRef}
        min={min}
        max={max}
        step={step}
      />
      <ValidationError fieldState={fieldState} />
    </div>
  );
};

export default FieldTextInput;
