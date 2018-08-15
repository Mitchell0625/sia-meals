import React, { Component } from 'react';
import axios from 'axios';
import EditImageSlider from './EditImageSlider/EditImageSlider';
import EditAbout from './EditAbout/EditAbout';

class Editor extends Component {
  state = {
    images: [],
    err: ''
  };

  componentDidMount = () => {
    axios
      .get('/api/getImages')
      .then(img => {
        this.setState({ images: img.data });
      })
      .catch(error => this.setState({ err: error }));
  };

  render() {
    console.log(this.state);
    return (
      <div className="editor">
        <section>
          <EditImageSlider />
        </section>
        <section>{/* <EditAbout /> */}</section>
      </div>
    );
  }
}

export default Editor;
