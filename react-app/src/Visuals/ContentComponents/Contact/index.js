import React, {
  useMemo
} from 'react';
import {
  useWindowSize
} from '@react-hook/window-size';
import {
  HiOutlinePhoneIncoming
} from "react-icons/hi";
import {
  MdOutlineEmail
} from "react-icons/md";
import {
  PiAddressBook
} from "react-icons/pi";

function Contact({ contactMethod }) {
  const { iconName, text } = contactMethod;

  const iconMap = {
    phone: HiOutlinePhoneIncoming,
    email: MdOutlineEmail,
    address: PiAddressBook,
  };

  const IconComponent = useMemo(() => iconMap[iconName], [iconName]);

  const [width] = useWindowSize();

  // Calculate adjusted width
  const adjustedWidth = useMemo(() => (width > 1400 ? 1400 : width) / 3 - 80, [width]);

  return (
    <div style={{
      width: adjustedWidth,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 40,
    }}>
      <IconComponent size={adjustedWidth / 3} color={'white'} />
      <div>
        <h2
          style={{
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            color: 'white',
            width: '100%',
            textAlign: 'left',
          }}>
          {text}
        </h2>        
      </div>
    </div>
  );
}

export default Contact;