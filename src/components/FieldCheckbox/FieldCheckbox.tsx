import classNames from 'classnames';
import IconCheckbox from './TIconCheckbox';

import css from './FieldCheckbox.module.scss';
import { Field, FieldProps, FieldRenderProps } from 'react-final-form';
import { DetailedHTMLProps, InputHTMLAttributes, useCallback } from 'react';

type FieldCheckBoxComponentProps = FieldRenderProps<string, HTMLInputElement> &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    className?: string;
    svgClassName?: string;
    textClassName?: string;
    value?: string;
    id?: string;
    label?: string | React.ReactNode;
    useSuccessColor?: boolean;
  };

type FieldCheckBoxProps = FieldProps<
  string,
  FieldCheckBoxComponentProps,
  HTMLInputElement
> & {
  className?: string;
  svgClassName?: string;
  textClassName?: string;
  value?: string;
  id: string;
  label: string | React.ReactNode;
  useSuccessColor?: boolean;
};

const FieldCheckboxComponent = ({
  input,
  className,
  useSuccessColor,
  label,
  id,
  svgClassName,
  textClassName,
}: FieldCheckBoxComponentProps) => {
  const classes = classNames(css.root, className);
  const handleOnChange = useCallback(
    (event: any) => {
      const { onBlur, onChange } = input;
      onChange(event);
      onBlur(event);
    },
    [input],
  );
  const inputProps = {
    ...input,
    onChange: handleOnChange,
    id,
  };

  const successColorVariantMaybe = useSuccessColor
    ? {
        checkedClassName: css.checkedSuccess,
        boxClassName: css.boxSuccess,
      }
    : {};

  return (
    <span className={classes}>
      <input {...inputProps} type="checkbox" className={css.input} />
      <label htmlFor={id} className={css.label}>
        <span className={css.checkboxWrapper}>
          <IconCheckbox
            className={svgClassName}
            {...successColorVariantMaybe}
          />
        </span>
        <span className={classNames(css.text, textClassName || css.textRoot)}>
          {label}
        </span>
      </label>
    </span>
  );
};

const FieldCheckbox = (props: FieldCheckBoxProps) => (
  <Field {...props} component={FieldCheckboxComponent} type="checkbox" />
);

// const FieldCheckbox: React.FC<TFieldCheckboxProps> = ({
//   className,
//   svgClassName,
//   textClassName,
//   id,
//   label,
//   useSuccessColor,
//   name,
//   control,
//   defaultValue = '',
//   value,
//   rules,
//   onBlur: onCustomBlur = () => null,
// }) => {
//   const {
//     field: { onBlur, ...inputProps },
//     fieldState,
//   } = useController({
//     name,
//     control,
//     defaultValue,
//     rules,
//   });

//
//   // This is a workaround for a bug in Firefox & React Final Form.
//   // https://github.com/final-form/react-final-form/issues/134
//   const handleBlur = (e: any) => {
//     onBlur();
//     if (typeof onCustomBlur === 'function') {
//       onCustomBlur(e);
//     }
//   };

//   const successColorVariantMaybe = useSuccessColor
//     ? {
//         checkedClassName: css.checkedSuccess,
//         boxClassName: css.boxSuccess,
//       }
//     : {};

//   return (
//     <span className={classes}>
//       <input
//         {...inputProps}
//         {...(value ? { value } : {})}
//         checked={inputProps.value === value}
//         onChange={_ => {
//           if (inputProps.value === value) {
//             inputProps.onChange('');
//           } else {
//             inputProps.onChange(value);
//           }
//         }}
//         id={id}
//         className={css.input}
//         onBlur={handleBlur}
//         type="checkbox"
//       />
//       <label htmlFor={id} className={css.label}>
//         <span className={css.checkboxWrapper}>
//           <IconCheckbox
//             className={svgClassName}
//             {...successColorVariantMaybe}
//           />
//         </span>
//         <span className={classNames(css.text, textClassName || css.textRoot)}>
//           {label}
//         </span>
//       </label>
//     </span>
//   );
// };

export default FieldCheckbox;
