import React, {
  DetailedHTMLProps,
  PropsWithChildren,
  SelectHTMLAttributes,
} from 'react';
import classNames from 'classnames';
import css from './FieldSelect.module.scss';
import ValidationError from '@src/components/ValidationError/ValidationError';
import { Field, FieldProps, FieldRenderProps } from 'react-final-form';

type FieldSelectComponentProps = FieldRenderProps<string, HTMLSelectElement> &
  DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > & {
    inputClassName?: string;
    labelClassName?: string;
    label?: string;
    id?: string;
  };

type FieldSelectProps = {
  inputClassName?: string;
  labelClassName?: string;
  label?: string;
  id: string;
} & FieldProps<string, FieldSelectComponentProps, HTMLSelectElement>;

const FieldSelectComponent = ({
  rootClassName,
  labelClassName,
  onBlur: onCustomBlur = () => null,
  onKeyUp = () => null,
  selectRef,
  selectClassName,
  className,
  id,
  label,
  input,
  meta,
  children,
  ...rest
}: PropsWithChildren<FieldSelectComponentProps>): JSX.Element => {
  if (label && !id) {
    throw new Error('id required when a label is given');
  }

  const { onBlur: inputBlur } = input;

  const { valid, invalid, touched, error } = meta;

  const hasError = !!(touched && invalid && error);

  const handleBlur = (e: any) => {
    inputBlur();
    if (typeof onCustomBlur === 'function') {
      onCustomBlur(e);
    }
  };

  const classes = classNames(css.root, className);
  const labelClasses = classNames(css.label, labelClassName);
  const selectClasses = classNames(selectClassName, css.select, {
    [css.selectSuccess]: valid,
    [css.selectError]: hasError,
  });

  const selectProps = { className: selectClasses, id, ...input, ...rest };

  return (
    <div className={classes}>
      {label ? (
        <label className={labelClasses} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <select
        {...selectProps}
        ref={selectRef}
        onBlur={handleBlur}
        className={selectClasses}>
        {children}
      </select>
      <ValidationError fieldState={meta} />
    </div>
  );
};

const FieldSelect = (props: FieldSelectProps) => {
  return <Field {...props} component={FieldSelectComponent} />;
};

export default FieldSelect;
