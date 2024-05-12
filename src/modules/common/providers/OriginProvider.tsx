'use client';

import { usePathname } from 'next/navigation';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const OriginContext = createContext(false);

export const useWithinPage = () => {
  return useContext(OriginContext);
};

export default function OriginProvider({ children }: PropsWithChildren) {
  const [isWithinPage, setIsWithinPage] = useState(false);
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);

  useEffect(() => {
    if (isWithinPage) return;
    if (pathnameRef.current === pathname) return;

    setIsWithinPage(true);
  }, [pathname]);

  return (
    <OriginContext.Provider value={isWithinPage}>
      {children}
    </OriginContext.Provider>
  );
}
