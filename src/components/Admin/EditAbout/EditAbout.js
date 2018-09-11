import React, { Component } from 'react';
import About from '../../About/About';

class EditAbout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newAbout: ''
    };
  }
  editText = val => {
    this.setState({ newAbout: val });
  };

  submitText = id => {
    this.props.updateAbout(id, this.state.newAbout);
  };
  render() {
    let currText = this.props.currAbout.map(e => {
      return <About key={e.id} text={e.text} />;
    });
    return (
      <div className="editAbout">
        <div>{currText}</div>
        <h2>What should it say?</h2>
        <input
          onChange={e => this.editText(e.target.value)}
          value={this.state.newAbout}
          type="text"
          placeholder="1000 character limit"
        />
        <button>Submit changes</button>
      </div>
    );
  }
}

export default EditAbout;
