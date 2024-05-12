import { ComponentType, MouseEventHandler } from 'react';
import { SvgIconProps } from '../../types/svg-icon.type';

type NavbarMorePopoverMenuItemProps = {
  icon?: ComponentType<SvgIconProps>;
  label: string;
  onClick?: MouseEventHandler;
};

export default function NavbarMorePopoverMenuItem(
  props: NavbarMorePopoverMenuItemProps,
) {
  const { icon: Icon, label, onClick } = props;

  return (
    <li className="w-full relative bg-transparent" onClick={onClick}>
      <div className="p-4 flex items-center cursor-pointer hover:bg-bg-hoverOverlay rounded-lg transition">
        {Icon && <Icon width={18} height={18} className="mr-3" />}
        <span className="first-letter:uppercase">{label}</span>
      </div>
    </li>
  );
}
