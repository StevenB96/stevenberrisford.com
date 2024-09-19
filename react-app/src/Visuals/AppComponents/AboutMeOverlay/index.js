import { 
  useState,
  forwardRef,
} from 'react';
import useResponsive from '../../../Hooks/useResponsive';
import {
  IoCloseCircleOutline
} from "react-icons/io5";

const AboutMeOverlay = forwardRef(({
  userSetIsAboutModalOpen,
  profile,
}, ref) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const { isMobile, width } = useResponsive();

  const handleMouseOver = () => setIsHighlighted(true);
  const handleMouseOut = () => setIsHighlighted(false);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: '6vw',
        left: '50%',
        transform: 'translate(-50%, 0%)',
        zIndex: 2,
        display: 'flex',
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 'max(0.4vw, 3px)',
        width: width / 1.2,
        maxWidth: 1400 / 1.2,
        flexDirection: 'column',
        backgroundColor: 'whitesmoke',
        padding: 10,
      }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <button
          onClick={() => userSetIsAboutModalOpen(false)}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
          }}>
          <IoCloseCircleOutline
            size={'max(4.5vw, 45px)'}
            color={isHighlighted ? 'black' : '#555555'}
          />
        </button>

      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: isMobile ? 'center' : 'flex-start',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 20,
          padding: 20,
        }}
      >
        <img
          src={profile?.profile_picture_link}
          alt={profile?.profile_picture_link}
          style={{
            width: '25%',
            minWidth: 150,
            aspectRatio: 1,
            objectFit: 'cover',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            borderStyle: 'solid',
            borderColor: '#555555',
            borderWidth: 'max(0.4vw, 3px)',
            boxShadow:
              `1px 1px 1px rgba(0,0,0,0.08),` +
              `2px 2px 2px rgba(0,0,0,0.08),` +
              `3px 3px 3px rgba(0,0,0,0.08),` +
              `4px 4px 4px rgba(0,0,0,0.08),` +
              `16px 16px 16px rgba(0,0,0,0.08)`,
          }}
        />
        <h3
          style={{
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            width: isMobile ? '100%' : '70%',
            textAlign: 'left',
            color: 'black',
          }}
        >
          {profile.description}
        </h3>
      </div>
    </div>
  );
});

export default AboutMeOverlay;