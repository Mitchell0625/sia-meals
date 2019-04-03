import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  image: PropTypes.string.isRequired
};

const AddImage = ({ image }) => {
  return (
    <div className="addImage">
      <img src={image} />
    </div>
  );
};

export default AddImage;
