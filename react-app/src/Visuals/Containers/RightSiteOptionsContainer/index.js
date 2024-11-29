import {
  memo
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  SupportButton,
} from '../../Buttons';
import useResponsive from '../../../Hooks/useResponsive';

import {
  setAppModalOpenRequest,
} from '../../../Redux/Actions/appActions';

const RightSiteOptionsContainer = ({}) => {
  // Hook to access Redux dispatch function
  const dispatch = useDispatch();

  // Accessing application state from Redux store
  const {
    appModalOpen
  } = useSelector(state => state.app);

  const {
    isTablet,
    isMobile
  } = useResponsive();

  const handleOnClick = () => {
    dispatch(
      setAppModalOpenRequest(appModalOpen === 'support' ? null : 'support')
    );
  }

  return (
    <div
      style={{
        top: 5,
        right: 5,
        position: 'fixed',
        zIndex: 3,
        display: 'flex',
        flexDirection: (isTablet || isMobile) ? 'column' : 'row',
        gap: 5,
      }}>
      <SupportButton
        onClick={handleOnClick}
      />
    </div>
  );
};

export default memo(RightSiteOptionsContainer);
