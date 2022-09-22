/**
 * Menu is component that shows extra content when it is clicked.
 * Clicking it toggles visibility of MenuContent.
 *
 * Example:
 *  <Menu>
 *    <MenuLabel>
 *      <span>Open menu</span>
 *    </MenuLabel>
 *    <MenuContent>
 *      <MenuItem key="first item">
 *        <Button onClick={onClick}>Click this</Button>
 *      </MenuItem>
 *    </MenuContent>
 *  </Menu>
 *
 */
import React, { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
import MenuContent from '@src/components/MenuContent/MenuContent';
import MenuLabel from '@src/components/MenuLabel/MenuLabel';

import css from './Menu.module.scss';

const KEY_CODE_ESCAPE = 27;
const CONTENT_TO_LEFT = 'left';
const CONTENT_TO_RIGHT = 'right';
const CONTENT_PLACEMENT_OFFSET = 0;
const MAX_MOBILE_SCREEN_WIDTH = 768;

const isControlledMenu = (
  isOpen: boolean | null,
  onToggleActiveProp: Function | null,
) => {
  return isOpen !== null && onToggleActiveProp !== null;
};

type TMenuProps = {
  className?: string;
  isOpen?: boolean | null;
  onToggleActive?: Function;
  contentPlacementOffset?: number;
  contentPosition?: string;
  useArrow?: boolean;
  children: React.ReactElement[];
};

const Menu: React.FC<PropsWithChildren<TMenuProps>> = ({
  className,
  isOpen = null,
  onToggleActive = null,
  contentPlacementOffset = CONTENT_PLACEMENT_OFFSET,
  children,
  contentPosition = CONTENT_TO_RIGHT,
  useArrow = true,
}) => {
  const [isOpenState, setIsOpenState] = useState(false);
  const [ready, setReady] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuContentRef = useRef<HTMLDivElement | null>(null);

  const onBlur = (event: any) => {
    // FocusEvent is fired faster than the link elements native click handler
    // gets its own event. Therefore, we need to check the origin of this FocusEvent.
    if (
      menuRef &&
      menuRef.current &&
      !menuRef.current.contains(event.relatedTarget)
    ) {
      if (isControlledMenu(isOpen, onToggleActive)) {
        if (onToggleActive) {
          onToggleActive(false);
        }
      } else {
        setIsOpenState(false);
      }
    }
  };

  const onKeyDown = (e: any) => {
    // Gather all escape presses to close menu
    if (e.keyCode === KEY_CODE_ESCAPE) {
      toggleOpen(false);
    }
  };

  const toggleOpen = (enforcedState: boolean) => {
    // If state is handled outside of Menu component, we call a passed in onToggleActive func
    const isMenuOpen = enforcedState != null ? enforcedState : !isOpen;
    if (isControlledMenu(isOpen, onToggleActive)) {
      if (onToggleActive) {
        onToggleActive(isMenuOpen);
      }
    } else {
      // If state is handled inside of Menu component, set state
      setIsOpenState(isMenuOpen);
    }
  };

  const positionStyleForMenuContent = (contentPosition: string) => {
    if (menuRef.current && menuContentRef.current) {
      const windowWidth = window.innerWidth;
      const rect = menuRef.current.getBoundingClientRect();

      // Calculate wether we should show the menu to the left of the component or right
      const distanceToRight = windowWidth - rect.right;
      const menuWidth = menuRef.current.offsetWidth;
      const contentWidthBiggerThanLabel =
        menuContentRef.current.offsetWidth - menuWidth;
      const usePositionLeftFromLabel = contentPosition === CONTENT_TO_LEFT;

      if (windowWidth <= MAX_MOBILE_SCREEN_WIDTH) {
        // Take full screen width on mobile
        return {
          left: -1 * (rect.left - 24),
          width: 'calc(100vw - 48px)',
        };
      }

      // Render menu content to the left according to the contentPosition
      // prop or if the content does not fit to the right. Otherwise render to
      // the right.
      return usePositionLeftFromLabel ||
        distanceToRight < contentWidthBiggerThanLabel
        ? { right: contentPlacementOffset, minWidth: menuWidth }
        : { left: contentPlacementOffset, minWidth: menuWidth };
    }

    // When the MenuContent is rendered for the first time
    // (for the sake of width calculation),
    // move it outside of viewport to prevent possible overflow.
    return isOpenState ? {} : { left: '-10000px' };
  };

  const positionStyleForArrow = (isPositionedRight: boolean) => {
    if (menuRef.current) {
      const menuWidth = menuRef.current.offsetWidth;
      return isPositionedRight
        ? Math.floor(menuWidth / 2) - contentPlacementOffset
        : Math.floor(menuWidth / 2);
    }
    return 0;
  };

  const prepareChildren = () => {
    if (React.Children.count(children) !== 2) {
      throw new Error(
        'Menu needs to have two children: MenuLabel and MenuContent.',
      );
    }

    return React.Children.map(children, (child: ReactElement) => {
      const isOpenTemp = isControlledMenu(isOpen, onToggleActive)
        ? isOpen
        : isOpenState;

      if (child.type === MenuLabel) {
        // MenuLabel needs toggleOpen function
        // We pass that directly  so that component user doesn't need to worry about that
        return React.cloneElement(child, {
          isOpen: isOpenTemp,
          onToggleActive: toggleOpen,
        });
      } else if (child.type === MenuContent) {
        // MenuContent needs some styling data (width, arrowPosition, and isOpen info)
        // We pass those directly so that component user doesn't need to worry about those.
        const positionStyles = positionStyleForMenuContent(contentPosition);
        const arrowPosition = useArrow
          ? positionStyleForArrow(positionStyles.right != null)
          : null;
        return React.cloneElement(child, {
          arrowPosition,
          contentRef: (node: any) => {
            menuContentRef.current = node;
          },
          isOpen: isOpenTemp,
          style: { ...child.props.style, ...positionStyles },
        });
      } else {
        throw new Error(
          'Menu has an unknown child. Only MenuLabel and MenuContent are allowed.',
        );
      }
    });
  };

  useEffect(() => {
    setReady(true);
    const isIndependentMenu = isOpen === null && onToggleActive === null;
    if (!(isIndependentMenu || isControlledMenu(isOpen, onToggleActive))) {
      throw new Error(
        `Menu has invalid props:
          Both isOpen and onToggleActive need to be defined (controlled menu),
          or neither of them (menu uses its own state management).`,
      );
    }
  }, [isOpen, onToggleActive]);

  const classes = classNames(css.root, className);
  const menuChildren = ready ? prepareChildren() : null;

  return (
    <div
      className={classes}
      onBlur={onBlur}
      tabIndex={0}
      onKeyDown={onKeyDown}
      ref={c => (menuRef.current = c)}>
      {menuChildren}
    </div>
  );
};

export default Menu;
