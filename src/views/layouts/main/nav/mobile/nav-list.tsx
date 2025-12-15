// @mui
import Collapse from '@mui/material/Collapse';
import { listClasses } from '@mui/material/List';
import { listItemTextClasses } from '@mui/material/ListItemText';
import { listItemButtonClasses } from '@mui/material/ListItemButton';
// hooks
import { useBoolean } from '@hooks/use-boolean';
// components
import { NavSectionVertical } from '@components/organics/nav-section';
import { usePathname } from '@routes/hook';
//
import { NavItemProps } from '../types';
import NavItem from './nav-item';

// ----------------------------------------------------------------------

type NavListProps = {
  item: NavItemProps;
};

export default function NavList({ item }: NavListProps) {
  const pathname = usePathname();

  const { path, children } = item;

  const externalLink = path.includes('http');

  const nav = useBoolean();

  return (
    <>
      <NavItem
        item={item}
        open={nav.value}
        onClick={nav.onToggle}
        active={pathname === path}
        externalLink={externalLink}
      />

      {!!children && (
        <Collapse in={nav.value} unmountOnExit>
          <NavSectionVertical data={children} />
        </Collapse>
      )}
    </>
  );
}
