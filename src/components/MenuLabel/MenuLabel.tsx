/**
 * MenuLabel is the only always visible part of Menu.
 * Clicking it toggles visibility of MenuContent.
 */
import { MouseEventHandler, PropsWithChildren, useState } from 'react';
import classNames from 'classnames';

import css from './MenuLabel.module.scss';

type TMenuLabelProps = {
  className?: string;
  isOpenClassName?: string;
  isOpen?: boolean;
  onToggleActive?: Function;
};

const MenuLabel: React.FC<PropsWithChildren<TMenuLabelProps>> = ({
  className,
  isOpenClassName,
  isOpen = false,
  onToggleActive = () => null,
  children,
}) => {
  const [clickedWithMouse, setClickedWithMouse] = useState(false);

  const onClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation();
    e.preventDefault();

    onToggleActive(!isOpen);

    // Don't show focus outline if user just clicked the element with mouse
    // tab + enter creates also a click event, but its location is origin.
    const nativeEvent = e.nativeEvent;
    const isRealClick = !(
      nativeEvent.clientX === 0 && nativeEvent.clientY === 0
    );
    if (isRealClick) {
      setClickedWithMouse(true);
    }
  };

  const onBlur = () => {
    setClickedWithMouse(false);
  };

  const isOpenClass = isOpenClassName || css.isOpen;
  const classes = classNames(css.root, className, {
    [css.clickedWithMouse]: clickedWithMouse,
    [isOpenClass]: isOpen,
  });

  return (
    <button className={classes} onClick={onClick} onBlur={onBlur}>
      {children}
    </button>
  );
};

export default MenuLabel;
