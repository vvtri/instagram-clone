import { cn } from '@/utilities/tailwind/cn';
import { PropsWithChildren, useEffect, useRef } from 'react';
import CloseSvgIcon from '../icon/svg-icon/CloseSvgIcon';

type ModalProps = PropsWithChildren<{
  showCloseButton?: boolean;
  onClickOutside?: () => any;
  isShow: boolean;
  onClose?: () => any;
}>;

export default function Modal(props: ModalProps) {
  const { children, onClickOutside, isShow, showCloseButton, onClose } = props;
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const body = document.getElementsByTagName('body').item(0);
    if (!body) return;

    if (isShow) {
      body.style.setProperty(
        '--st',
        -document.documentElement.scrollTop + 'px',
      );
      body.classList.add('disable-scroll');
    } else {
      body.classList.remove('disable-scroll');
    }
  }, [isShow]);

  return (
    <div
      className={cn(
        'fixed inset-0 invisible opacity-0 pointer-events-none transition z-modal bg-modal-default',
        { 'visible opacity-100 pointer-events-auto': isShow },
      )}
    >
      {showCloseButton && (
        <div className="p-4 absolute right-4 top-4" onClick={onClose}>
          <CloseSvgIcon />
        </div>
      )}

      <div
        ref={wrapperRef}
        className="flex w-full h-full items-center justify-center relative"
        onClick={(e) => {
          const wrapper = wrapperRef.current;

          if (!wrapper) return;
          if (!wrapper.isSameNode(e.target as Node)) return;

          onClickOutside?.();
        }}
      >
        {children}
      </div>
    </div>
  );
}
