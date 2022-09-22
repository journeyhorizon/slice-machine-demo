import React, { PropsWithChildren, ReactNode } from 'react';
import { FocusEventHandler, KeyboardEventHandler, LegacyRef } from 'react';
import { Control, useController, UseControllerProps } from 'react-hook-form';
import classNames from 'classnames';
import css from './FieldSelect.module.scss';
import ValidationError from '@src/components/ValidationError/ValidationError';

interface TFieldSelectProps {
  id?: string;
  className?: string;
  selectClassName?: string;
  labelClassName?: string;
  name: UseControllerProps['name'];
  control: Control<any>;
  defaultValue?: string;
  rules?: UseControllerProps['rules'];
  label?: string;
  onBlur?: FocusEventHandler<any>;
  type?: 'select';
  autoComplete?: string;
  onKeyUp?: KeyboardEventHandler<HTMLSelectElement>;
  selectRef?: LegacyRef<HTMLSelectElement>;
  children: ReactNode | string;
}

const FieldSelect: React.FC<PropsWithChildren<TFieldSelectProps>> = ({
  id,
  className,
  labelClassName,
  name,
  control,
  defaultValue = '',
  rules,
  label,
  onBlur: onCustomBlur = () => null,
  onKeyUp = () => null,
  selectRef,
  selectClassName,
  children,
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

  const handleBlur = (e: any) => {
    onBlur();
    if (typeof onCustomBlur === 'function') {
      onCustomBlur(e);
    }
  };

  const classes = classNames(css.root, className);
  const labelClasses = classNames(css.label, labelClassName);
  const selectClasses = classNames(selectClassName, css.select, {
    [css.selectSuccess]: !fieldState.invalid && !!inputProps.value,
    [css.selectError]: fieldState.invalid,
  });

  return (
    <div className={classes}>
      {label ? (
        <label className={labelClasses} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <select
        {...inputProps}
        id={id}
        ref={selectRef}
        onBlur={handleBlur}
        onKeyUp={onKeyUp}
        className={selectClasses}>
        {children}
      </select>
      <ValidationError fieldState={fieldState} />
    </div>
  );
};

export default FieldSelect;
