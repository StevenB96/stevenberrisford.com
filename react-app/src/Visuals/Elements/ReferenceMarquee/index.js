import React from 'react';
import {
  useSelector
} from 'react-redux';
import Marquee from "react-fast-marquee";

const ReferenceMarquee = ({}) => {
  // const references = [
  //   {
  //     author: 'Andrew Ward',
  //     role: 'CEO',
  //     organisation: 'Scorchsoft Ltd',
  //     text: 'Steven was employed at Scorchsoft from September 28th 2020, until his resignation, in [late] August 2023. ' +
  //       '[Steven] started as junior developer and was promoted to mid-level developer in July 2022. ' +
  //       'He worked on several successful web and mobile application projects, using a variety of technologies.'
  //   },
  //   {
  //     author: 'Audrius Dobrovolskis',
  //     role: 'Lead Developer',
  //     organisation: 'Scorchsoft Ltd',
  //     text: 'Steven made an outstanding impression on both his colleagues and myself with his exceptional technical proficiency and innovative problem-solving skills. ' +
  //       'He has continuously demonstrated a strong grasp of the latest development trends and best practices in full-stack development . . . ' +
  //       'Apart from his technical abilities, Steven is an excellent team player with strong communication skills. ' +
  //       'He is always willing to listen, share his expertise, and patiently help less experienced team members.'
  //   },
  //   {
  //     author: 'Eleni Komninou',
  //     role: 'Project Team',
  //     organisation: 'Scorchsoft Ltd',
  //     text: 'I worked with Steven Berrisford at Scorchsoft Ltd., and we collaborated for over a year across several projects . . . ' + 
  //     'In many instances he helped challenge the team, to improve upon existing requirements without changing the core functionality, ' + 
  //     'and does not hesitate to delve into the details and suggest creative solutions to complex problems. ' +
  //     'I would have no hesitation recommending him for any position.'
  //   },
  //   {
  //     author: 'Jordan Smith',
  //     role: 'Mid-Level Developer',
  //     organisation: 'Scorchsoft Ltd',
  //     text: 'I have worked with Steven for the past two and a half years, and it has been a pleasure. ' + 
  //     'Steven is very detail oriented, logical and quality focused, looking for the best way and practice to build the software at hand. ' + 
  //     'Steven is also very easy to get along with and a great presence to have around, ' + 
  //     'making great effort to make time for and get to know people around him.'
  //   },
  // ];

  const {
    references,
  } = useSelector(state => state.app);

  return (
    <Marquee
      pauseOnHover={true}
      speed={150}
      gradientColor='grey'
      gradientWidth={200}
      style={{
        backgroundColor: 'whitesmoke',
        borderBottomStyle: 'solid',
        borderWidth: 'max(0.3vw, 2.25px)',
      }}
    >
      {
        references.map((reference, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '0px 20px',
            gap: 10,
            background: `linear-gradient(90deg, grey 0%, whitesmoke 100%)`,
          }}>
            <p><u>{reference.author}, {reference.role} at {reference.organisation}:</u></p>
            <p>{reference.text}</p>
          </div>
        ))
      }
    </Marquee>
  );
};

export default ReferenceMarquee;