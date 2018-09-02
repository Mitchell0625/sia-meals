import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import AllImages from './AllImages';
import AddImage from '../AddImage';

const propTypes = {
  aImages: PropTypes.array.isRequired,
  save: PropTypes.func.isRequired
};
class EditImageSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image1: '',
      image2: '',
      image3: '',
      addedImage: []
    };
  }

  changeImage1 = val => {
    this.setState({ image1: val });
  };

  changeImage2 = val => {
    this.setState({ image2: val });
  };

  changeImage3 = val => {
    this.setState({ image3: val });
  };

  added = image => {
    let newA = this.state.addedImage.slice();
    newA.push(...image);
    this.setState({ addedImage: newA });
  };

  render() {
    console.log(this.state);
    const allImages = this.props.aImages.map(image => {
      return <AllImages key={image.id} url={image.url} />;
    });

    let showAdded = [];
    if (this.state.addedImage.length >= 1) {
      showAdded = this.state.addedImage.map(e => {
        return <AddImage key={e.name} image={e.preview} />;
      });
    }
    return (
      <div className="editimage">
        <Dropzone
          accept="image/*"
          onDrop={image => {
            this.added(image);
          }}
        >
          <p>Add file</p>
        </Dropzone>
        {showAdded}
        <p>Change Image 1</p>
        <input onChange={e => this.changeImage1(e.target.value)} />
        <p>Change Image 2</p>
        <input onChange={e => this.changeImage2(e.target.value)} />
        <p>Change Image 3</p>
        <input onChange={e => this.changeImage3(e.target.value)} />
        <div className="editimage_allImages">{allImages}</div>
      </div>
    );
  }
}

export default EditImageSlider;
