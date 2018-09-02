import React, { Component } from 'react';

class EditAbout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newAbout: ''
    };
  }
  editText = () => {};

  render() {
    let currText = this.props.currAbout.map(e => {
      return (
        <div key={e.id}>
          <p>{e.text}</p>
        </div>
      );
    });
    return <div>{currText}</div>;
  }
}

export default EditAbout;
