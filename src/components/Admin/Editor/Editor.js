import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import EditImageSlider from '../EditImageSlider/EditImageSlider';
import EditAbout from '../EditAbout/EditAbout';
import { getImages, addImage } from '../../../ducks/reducer';
import './Editor.css';

class Editor extends Component {
  state = {
    images: [],
    err: ''
  };

  componentDidMount = () => {
    this.props.getImages();
    // this.props.getAbout();
  };

  saveImage = image => {
    this.props.addImage(image);
  };
  render() {
    return (
      <div className="editor">
        <h1>Editor</h1>
        <section className="editor__section">
          <h2>Edit Slider</h2>
          <EditImageSlider
            save={this.saveImage}
            aImages={this.props.allImages}
          />
        </section>

        <section className="editor__section">
          <h2>Edit About section</h2>
          {/* <EditAbout /> */}
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { getImages, addImage }
)(Editor);
