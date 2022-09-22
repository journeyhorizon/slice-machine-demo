import classNames from 'classnames';
import css from './Topbar.module.css';
import TopbarDesktop from './TopbarDesktop';
import TopbarMobile from './TopbarMobile';

type TTopbarProps = {
  className?: string;
};

const Topbar: React.FC<TTopbarProps> = ({ className }) => {
  const classes = classNames(css.root, className);

  return (
    <div className={classes}>
      <TopbarDesktop />
      <TopbarMobile />
    </div>
  );
};

export default Topbar;
