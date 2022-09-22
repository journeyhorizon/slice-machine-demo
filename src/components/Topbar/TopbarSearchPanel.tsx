import Drawer from '@src/components/Drawer/Drawer';
import { MouseEventHandler } from 'react';
import TopbarSearchForm from './form/TopbarSearchForm';

type TTopbarSearchPanelProps = {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLElement>;
};

const TopbarSearchPanel: React.FC<TTopbarSearchPanelProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} type="right">
      <TopbarSearchForm onClose={onClose} />
    </Drawer>
  );
};

export default TopbarSearchPanel;
