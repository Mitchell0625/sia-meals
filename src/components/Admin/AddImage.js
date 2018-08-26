import React from 'react';
import PropTypes from 'prop-types';

const AddImage = ({ image }) => {
  return (
    <div>
      <img src={image} />
      <button>save for later</button>
    </div>
  );
};

export default AddImage;
