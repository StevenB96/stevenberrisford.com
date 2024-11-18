import React from 'react';
import {
  useSelector
} from 'react-redux';
import Marquee from "react-fast-marquee";
import useResponsive from '../../../Hooks/useResponsive';

const ReferenceMarquee = ({ }) => {
  const {
    references,
  } = useSelector(state => state.app);

  const { width } = useResponsive();

  return (
    <Marquee
      speed={width * 0.05}
      gradient={true}
      gradientWidth={'20%'}
      style={{
        backgroundColor: 'whitesmoke',
        borderBottomStyle: 'solid',
        borderWidth: 'max(0.3vw, 2.25px)',
      }}
    >
      {
        references?.map((reference, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '5px 20px 0px 20px',
            gap: 10,
            // background: `linear-gradient(90deg, grey 0%, whitesmoke 100%)`,
          }}>
            <h2>
              <u>{reference.author}, {reference.role} at {reference.organisation}</u>
            </h2>
            <h2
              >{reference.text}
            </h2>
          </div>
        ))
      }
    </Marquee>
  );
};

export default ReferenceMarquee;