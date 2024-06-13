const ProfilePictureElement = ({ profile, onClick }) => {
  return (
    <button
      style={{
        cursor: 'help',
      }}
      onClick={onClick}
    >
      <img
        src={profile?.profile_picture_link}
        alt={profile?.profile_picture_link}
        style={{
          top: '1vw',
          left: '1vw',
          position: 'fixed',
          display: 'flex',
          height: 'min(150px, 20vw)',
          aspectRatio: 1,
          objectFit: 'cover',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: 'solid',
          boxShadow:
            `1px 1px 1px rgba(0,0,0,0.08),` +
            `2px 2px 2px rgba(0,0,0,0.08),` +
            `3px 3px 3px rgba(0,0,0,0.08),` +
            `4px 4px 4px rgba(0,0,0,0.08),` +
            `16px 16px 16px rgba(0,0,0,0.08)`,
        }}
      />
    </button>
  );
};

export default ProfilePictureElement;