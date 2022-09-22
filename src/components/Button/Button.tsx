import {
  MouseEventHandler,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  useMemo,
  PropsWithChildren,
} from 'react';
import classNames from 'classnames';
import IconSpinner from '@src/components/IconSpinner/IconSpinner';
import IconCheckmark from '@src/components/IconCheckmark/IconCheckmark';

import css from './Button.module.scss';

type TButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  rootClassName?: string;
  disabled?: boolean | null;
  loading?: boolean;
  size?: 'small' | 'default' | 'large';
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  title?: string;
  ready?: boolean | null;
};

const Button: React.FC<PropsWithChildren<TButtonProps>> = ({
  className,
  rootClassName,
  onClick,
  disabled,
  loading,
  size = 'default',
  type = 'button',
  children,
  title,
  ready,
  ...rest
}) => {
  const classes = classNames(rootClassName || css.root, className, {
    [css.smallButton]: size === 'small',
    [css.defaultButton]: size === 'default',
    [css.largeButton]: size === 'large',
    [css.ready]: ready,
  });

  const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
    if (!loading && !disabled && !ready && typeof onClick === 'function') {
      onClick(event);
    }
  };

  const content = useMemo(() => {
    if (loading) {
      return <IconSpinner className={css.spinner} />;
    } else if (ready) {
      return <IconCheckmark className={css.checkmark} />;
    } else {
      return children;
    }
  }, [loading, children]);

  return (
    <button
      className={classes}
      disabled={disabled}
      type={type}
      onClick={handleClick}
      title={title}
      {...rest}>
      {content}
    </button>
  );
};

export default Button;

export const InlineTextButton = (props: TButtonProps): JSX.Element => {
  const classes = classNames(
    props.rootClassName || css.inlineTextButtonRoot,
    css.inlineTextButton,
  );
  return <Button {...props} rootClassName={classes} />;
};
InlineTextButton.displayName = 'InlineTextButton';

export const SecondaryButton = (props: TButtonProps): JSX.Element => {
  const classes = classNames(
    props.rootClassName || css.secondaryButtonRoot,
    css.secondaryButton,
  );
  return <Button {...props} rootClassName={classes} />;
};
SecondaryButton.displayName = 'SecondaryButton';
