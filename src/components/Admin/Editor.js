import React, { Component } from 'react';
import EditImageSlider from './EditImageSlider/EditImageSlider';
import EditAbout from './EditAbout/EditAbout';

class Editor extends Component {
  state = {
    images: []
  };

  render() {
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
