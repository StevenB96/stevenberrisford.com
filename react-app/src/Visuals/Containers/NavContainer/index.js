import {
  memo
} from 'react';
import NavBarColumn from '../../Elements/NavBarColumn';
import NavBarRow from '../../Elements/NavBarRow';

import useResponsive from '../../../Hooks/useResponsive';

const NavContainer = ({
  navInputMap,
  scrollToSection
}) => {
  const { isMobile, isTablet } = useResponsive();

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      {
        isMobile || isTablet ?
          <NavBarColumn
            navInputMap={navInputMap}
            scrollToSection={scrollToSection} /> :
          <NavBarRow
            navInputMap={navInputMap}
            scrollToSection={scrollToSection} />
      }
    </div>
  );
};

export default memo(NavContainer);