import React, { Component } from "react";

class Creates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: []
    };
  }

  editMeal(id) {}

  render() {
    return (
      <div className="creates-page">
        <button>Update Menu</button>
        {/* to view what customer sees
        <button>View Meals</button> */}
      </div>
    );
  }
}

export default Creates;
