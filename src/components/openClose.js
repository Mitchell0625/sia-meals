//render prop for open close
import React from "react";

class OpenClose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.closeIt = this.closeIt.bind(this);
  }
  closeIt = e => {
    if (!this.state.toggle) {
      this.setState({ toggle: true });
    } else if (this.state.toggle) {
      this.setState({ toggle: false });
    }
  };

  render() {
    const { toggle } = this.state;
    const { closeIt } = this;
    return <div>{this.props.render(toggle, closeIt)}</div>;
  }
}
export default OpenClose;
