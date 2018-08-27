import React from 'react';
import PropTypes from 'prop-types';
import './About.css';

const propTypes = {
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
