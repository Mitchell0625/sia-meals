import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  switchView: PropTypes.func.isRequired
};

const Sidebar = ({ switchView }) => {
  return (
    <div className="sidebar">
      <h2 onClick={() => switchView('image')}>Edit Slider</h2>
      <h2 onClick={() => switchView('about')}>Edit About</h2>
    </div>
  );
};

Sidebar.propTypes = propTypes;
export default Sidebar;
