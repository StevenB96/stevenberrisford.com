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
  const adjustedWidth = useMemo(() => (width > 1400 ? 1400 : width) / 3 - 40, [width]);

  return (
    <div style={{
      width: adjustedWidth,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 20,
    }}>
      <IconComponent size={adjustedWidth / 4} color={'whitesmoke'} />
      <div>
        <h3
          style={{
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            color: 'whitesmoke',
            textAlign: 'center',
          }}>
          {text}
        </h3>        
      </div>
    </div>
  );
}

export default Contact;