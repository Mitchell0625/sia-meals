import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import EditImageSlider from './EditImageSlider/EditImageSlider';
import EditAbout from './EditAbout/EditAbout';
import { getImages, addImage } from '../../ducks/reducer';

class Editor extends Component {
  state = {
    images: [],
    err: ''
  };

  componentDidMount = () => {
    this.props.getImages();
  };

  saveImage = image => {
    this.props.addImage(image);
  };
  render() {
    console.log(this.state);

    return (
      <div className="editor">
        <section>
          <h2>Edit Slider</h2>
          <EditImageSlider
            save={this.saveImage}
            aImages={this.props.allImages}
          />
        </section>

        <section>
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
