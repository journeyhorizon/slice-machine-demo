import classNames from 'classnames';
import { FieldMetaState } from 'react-final-form';
import css from './ValidationError.module.scss';

type TValidationErrorProps = {
  className?: string;
  fieldState: FieldMetaState<any>;
};
const ValidationError = ({ fieldState, className }: TValidationErrorProps) => {
  const { touched, error } = fieldState;
  const classes = classNames(css.root, className);

  return touched && error ? <p className={classes}>{error}</p> : null;
};

export default ValidationError;
