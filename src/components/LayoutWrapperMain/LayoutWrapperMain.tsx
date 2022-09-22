/**
 * This is a wrapper component for different Layouts. Main content should be added to this wrapper.
 */
import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import css from './LayoutWrapperMain.module.scss';

type TLayoutWrapperMainProps = {
  className?: string;
  rootClassName?: string;
};

const LayoutWrapperMain: React.FC<PropsWithChildren<TLayoutWrapperMainProps>> =
  ({ className, rootClassName, children }) => {
    const classes = classNames(rootClassName || css.root, className);

    return (
      <div className={classes} role="main">
        {children}
      </div>
    );
  };

export default LayoutWrapperMain;
