import React, { Component } from "react";

class Creates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: []
    };
  }

  render() {
    return (
      <div className="creates-page">
        <button>Update Menu</button>
      </div>
    );
  }
}

export default Creates;
