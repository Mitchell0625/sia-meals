import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  url: PropTypes.string.isRequired
};
const imgStyle = {
  width: '100px',
  height: '100px'
};

const divStyle = {};
const AllImages = ({ url }) => {
  return (
    <div className="allImages">
      <img style={imgStyle} className="allImages__img" src={url} />
    </div>
  );
};

AllImages.propTypes = propTypes;
export default AllImages;
