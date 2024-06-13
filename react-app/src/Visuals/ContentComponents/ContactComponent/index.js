import {
  useWindowSize,
} from '@react-hook/window-size';
import Card from 'react-bootstrap/Card';
import {
  HiOutlinePhoneIncoming
} from "react-icons/hi";
import {
  MdOutlineEmail
} from "react-icons/md";
import {
  PiAddressBook
} from "react-icons/pi";

function ContactComponent({ contactMethod }) {
  const { iconName, text } = contactMethod;

  const iconMap = {
    phone: HiOutlinePhoneIncoming,
    email: MdOutlineEmail,
    address: PiAddressBook,
  };

  const IconComponent = iconMap[iconName];

  let [width, height] = useWindowSize();
  width = Math.min(width, 1400);
  const a = 80;
  const b = 150;
  const c = 0.8;
  const divisions = Math.floor((width / b) ** c);

  return (
    <Card style={{
      width: `calc(( 100% / ${divisions} ) - ${(a * 2) / divisions}px)`,
      // aspectRatio: 1,
      // padding: a / divisions,
      margin: a / divisions,

      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
    }}>
      <Card.Body style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '50%',
        aspectRatio: 1,
        width: '100%',
        boxSizing: 'border-box',
        border: 'solid',
      }}>
        <div
          style={{ width: '80%' }}
        >
          <IconComponent size={'100%'} />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
            width: '80%',
          }}
        >
          <p
            style={{
              whiteSpace: 'pre-wrap',
              textAlign: 'center',
              wordWrap: 'break-word',
              background: 'rgba(255,255,255,0.9)',
            }}>
            {text}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ContactComponent;