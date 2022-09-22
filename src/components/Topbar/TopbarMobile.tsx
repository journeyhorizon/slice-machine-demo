import IconLogo from '@src/components/IconLogo/IconLogo';
import IconSearch from '@src/components/IconSearch/IconSearch';
import NamedLink from '@src/components/NamedLink/NamedLink';
import classNames from 'classnames';
import { useCallback, useState } from 'react';
import css from './TopbarMobile.module.scss';
import TopbarMobileMenu from './TopbarMobileMenu';
import TopbarSearchPanel from './TopbarSearchPanel';

type TTopbarMobileProps = {
  className?: string;
};

const TopbarMobile: React.FC<TTopbarMobileProps> = ({ className }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);

  const handleOpenMenu = useCallback(() => {
    setIsOpenMenu(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsOpenMenu(false);
  }, []);

  const handleOpenSearch = useCallback(() => {
    setIsOpenSearch(true);
  }, []);

  const handleCloseSearch = useCallback(() => {
    setIsOpenSearch(false);
  }, []);

  const classes = classNames(css.root, className);
  const hamburgerClasses = classNames(css.hamburger, {
    [css.openedHamburger]: isOpenMenu,
  });

  return (
    <div className={classes}>
      <nav className={css.nav}>
        <div className={hamburgerClasses} onClick={handleOpenMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <NamedLink className={css.logoWrapper} name="HomePage">
          <IconLogo className={css.logo} />
        </NamedLink>
        <div className={css.searchIconWrapper} onClick={handleOpenSearch}>
          <IconSearch className={css.searchIcon} />
        </div>
      </nav>
      <TopbarMobileMenu isOpen={isOpenMenu} onClose={handleCloseMenu} />
      <TopbarSearchPanel isOpen={isOpenSearch} onClose={handleCloseSearch} />
    </div>
  );
};

export default TopbarMobile;
