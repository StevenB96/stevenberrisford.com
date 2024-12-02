import {
  memo
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  SupportButton,
  ReferenceButton,
} from '../../Buttons';
import useResponsive from '../../../Hooks/useResponsive';

import {
  setAppModalOpenRequest,
} from '../../../Redux/Actions/appActions';

const RightSiteOptionsContainer = ({ }) => {
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

  const handleSupportOnClick = () => {
    dispatch(
      setAppModalOpenRequest(appModalOpen === 'support' ? null : 'support')
    );
  }

  const handleReferenceOnClick = () => {
    dispatch(
      setAppModalOpenRequest(appModalOpen === 'reference' ? null : 'reference')
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
      <ReferenceButton
        onClick={handleReferenceOnClick}
      />
      <SupportButton
        onClick={handleSupportOnClick}
      />
    </div>
  );
};

export default memo(RightSiteOptionsContainer);
