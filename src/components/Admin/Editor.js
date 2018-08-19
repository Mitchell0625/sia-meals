import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import EditImageSlider from './EditImageSlider/EditImageSlider';
import EditAbout from './EditAbout/EditAbout';
import { getImages } from '../../ducks/reducer';

class Editor extends Component {
  state = {
    images: [],
    err: ''
  };

  componentDidMount = () => {
    this.props.getImages();
  };

  render() {
    console.log(this.state);

    return (
      <div className="editor">
        <section>
          <EditImageSlider aImages={this.props.allImages} />
        </section>

        <section>{/* <EditAbout /> */}</section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { getImages }
)(Editor);
