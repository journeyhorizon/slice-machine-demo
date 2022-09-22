import IconClose from '@src/components/IconClose/IconClose';
import classNames from 'classnames';
import { MouseEventHandler, PropsWithChildren } from 'react';
import { useIntl } from 'react-intl';

import css from './Drawer.module.css';

type TDrawerProps = {
  className?: string;
  contentClassName?: string;
  isOpen?: boolean;
  type?: 'left' | 'right';
  onClose?: MouseEventHandler<HTMLElement>;
};

const Drawer: React.FC<PropsWithChildren<TDrawerProps>> = ({
  className,
  contentClassName,
  isOpen = false,
  type = 'left',
  onClose = () => null,
  children,
}) => {
  const intl = useIntl();
  const classes = classNames(css.root, className, {
    [css.left]: type === 'left',
    [css.right]: type === 'right',
    [css.openedModal]: isOpen,
  });

  const contentClasses = classNames(css.modalContent, contentClassName);

  return (
    <div className={classes}>
      <div className={css.closeWrapper} onClick={onClose}>
        <span className={css.closeText}>
          {intl.formatMessage({ id: 'Drawer.close', defaultMessage: 'Close' })}
        </span>
        <IconClose />
      </div>
      <div className={contentClasses}>{children}</div>
    </div>
  );
};

export default Drawer;
