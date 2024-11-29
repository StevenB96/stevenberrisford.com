import { useWindowSize } from '@react-hook/window-size';
import env from '../env';

const useResponsive = () => {
  const [width, height] = useWindowSize();
  const isMobile = width < (env.MOBILE_WIDTH_BREAKPOINT || 700);
  const isTablet = !isMobile && width < (env.TABLET_WIDTH_BREAKPOINT || 1000);
  const isHandHeld = isMobile || isTablet;
  return { 
    isMobile, 
    isTablet, 
    isHandHeld,
    width, 
    height,
  };
};

export default useResponsive;