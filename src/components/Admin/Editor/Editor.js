import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import EditImageSlider from '../EditImageSlider/EditImageSlider';
import EditAbout from '../EditAbout/EditAbout';
import Sidebar from '../Sidebar/Sidebar';
import { getImages, addImage } from '../../../ducks/reducer';
import './Editor.css';

class Editor extends Component {
  state = {
    images: [],
    err: '',
    show: ''
  };

  componentDidMount = () => {
    this.props.getImages();
    // this.props.getAbout();
  };

  showComponent = page => {
    this.setState({
      show: page
    });
  };

  saveImage = image => {
    this.props.addImage(image);
  };
  render() {
    console.log(this.state.show);
    let view = (
      <div>
        <button onClick={() => this.showComponent('image')}>
          Image Slider
        </button>
        <button onClick={() => this.showComponent('about')}>
          About Section
        </button>
      </div>
    );

    if (this.state.show == 'image') {
      view = (
        <section className="editor__section">
          <h2>Edit Slider</h2>
          <EditImageSlider
            save={this.saveImage}
            aImages={this.props.allImages}
          />
        </section>
      );
    }
    return (
      <div className="editor">
        <Sidebar switchView={this.showComponent} />
        <div>
          <h1>What would you like to change?</h1>
          {view}
        </div>
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
