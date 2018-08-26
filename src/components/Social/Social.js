import React, { Component } from 'react';
import axios from 'axios';

class Social extends Component {
  componentDidMount = () => {
    axios
      .post(
        `https://api.instagram.com/oauth/authorize/?client_id=${
          process.env.REACT_APP_INSTAGRAM
        }&redirect_uri=${
          process.env.REACT_APP_INSTAGRAM_REDIRECT
        }&response_type=token`
      )
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  };
  render() {
    return <div>Social</div>;
  }
}

export default Social;
