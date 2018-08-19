import React from 'react';

const AllImages = ({ url }) => {
  return (
    <div className="allImages">
      <img className="allImages__img" src={url} />
    </div>
  );
};

export default AllImages;
