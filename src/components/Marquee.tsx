import React from 'react';
import { MARQUEE_SKILLS, Icon } from '../data/portfolioData';

export const Marquee: React.FC = () => {
  const content = (
    <>
      {MARQUEE_SKILLS.map((skill, index) => (
        <React.Fragment key={`${skill}-${index}`}>
          <span>{skill}</span>
          <Icon name="star" />
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div className="band-clip" aria-hidden="true">
      <div className="band">
        <div className="track" id="track">
          {content}
          {content}
        </div>
      </div>
    </div>
  );
};
