'use client';
import { cn } from '@/utilities/tailwind/cn';
import React, { ComponentType, ReactNode } from 'react';
import { SvgIconProps } from '../../types/svg-icon.type';
import { NAVBAR_ICON_SIZE } from './Navbar';

type NavbarItemProps = {
  highlight?: boolean;
  icon?: ComponentType<SvgIconProps>;
  label: ReactNode;
  onClick?: () => any;
  iconProps?: SvgIconProps;
  iconNode?: ReactNode;
  className?: string;
  popupOverNode?: ReactNode;
};

const NavbarItem = React.forwardRef<HTMLDivElement, NavbarItemProps>(
  (props, ref) => {
    const {
      icon: Icon,
      label,
      highlight,
      onClick,
      iconProps,
      iconNode,
      className,
      popupOverNode,
    } = props;

    return (
      <div
        className={cn('relative xl:w-full', className)}
        ref={ref}
        onClick={onClick}
      >
        {popupOverNode}

        <div className="transition cursor-pointer lg:py-4 xl:w-full xl:px-3 xl:flex xl:items-center xl:hover:bg-bg-banner xl:rounded-lg group">
          {Icon && (
            <Icon
              width={NAVBAR_ICON_SIZE}
              height={NAVBAR_ICON_SIZE}
              thickness={highlight ? 'fat' : 'thin'}
              className="transition group-hover:scale-110"
              {...iconProps}
            />
          )}

          {iconNode}

          <span
            className="hidden xl:block text-base text-text-primary ml-5 first-letter:uppercase"
            style={{ fontWeight: highlight ? 700 : 400 }}
          >
            {label}
          </span>
        </div>
      </div>
    );
  },
);

export default NavbarItem;
