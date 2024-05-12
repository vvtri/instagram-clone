import { useMediaQuery } from '@uidotdev/usehooks';

export const useResponsive = () => {
  const isLargeDevice = useMediaQuery('only screen and (min-width : 1024px)');
  const isMediumDevice = useMediaQuery('only screen and (min-width : 768px)');
  const isSmallDevice = useMediaQuery('only screen and (min-width : 640px)');
  const isExtraLargeDevice = useMediaQuery(
    'only screen and (min-width : 1280px)',
  );

  return { isLargeDevice, isMediumDevice, isExtraLargeDevice, isSmallDevice };
};
