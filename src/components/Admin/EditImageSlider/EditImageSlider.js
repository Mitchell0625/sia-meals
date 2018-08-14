import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class EditImageSlider extends Component {
  state = {
    image1: '',
    image2: '',
    image3: ''
  };

  changeImage1 = val => {
    this.setState({ image1: val });
  };

  changeImage2 = val => {
    this.setState({ image2: val });
  };

  changeImage3 = val => {
    this.setState({ image3: val });
  };

  render() {
    console.log(this.state);
    return (
      <div className="editimage">
        <p>Change Image 1</p>
        <Dropzone>
          <p>Add file</p>
        </Dropzone>
        <input onChange={e => this.changeImage1(e.target.value)} />
        <p>Change Image 2</p>
        <input onChange={e => this.changeImage2(e.target.value)} />
        <p>Change Image 3</p>
        <input onChange={e => this.changeImage3(e.target.value)} />
      </div>
    );
  }
}

export default EditImageSlider;
