import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import AllImages from './AllImages';

class EditImageSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image1: '',
      image2: '',
      image3: '',
      addedImage: ''
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

  addImage(image) {
    this.setState({ addedImage: image.preview });
  }
  render() {
    console.log(this.props);
    const allImages = this.props.aImages.map(image => {
      return <AllImages key={image.id} url={image.url} />;
    });
    return (
      <div className="editimage">
        <p>Change Image 1</p>
        <Dropzone
          accept="image/*"
          onDrop={addedImage => this.setState({ addedImage })}
        >
          <p>Add file</p>
        </Dropzone>
        <input onChange={e => this.changeImage1(e.target.value)} />
        <p>Change Image 2</p>
        <input onChange={e => this.changeImage2(e.target.value)} />
        <p>Change Image 3</p>
        <input onChange={e => this.changeImage3(e.target.value)} />
        {allImages}
      </div>
    );
  }
}

export default EditImageSlider;
