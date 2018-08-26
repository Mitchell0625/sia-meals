import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

const About = ({ text }) => {
  return (
    <div className="about">
      <p>{text}</p>
    </div>
  );
};

About.propTypes = propTypes;
export default About;
