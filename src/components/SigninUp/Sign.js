import React, { Component } from 'react';
import { userSignInWithEmailAndPassword } from '../../firebase/auth';
import { connect } from 'react-redux';
import { loginUser } from '../../ducks/reducer';
import './Form.css';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});
const theSign = WrappedComponent => {
  class Sign extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        user: {}
      };
      this.handleSignIn = this.handleSignIn.bind(this);
      this.signInUser = this.signInUser.bind(this);
    }
    handleSignIn = e => {
      this.setState({ [e.target.name]: e.target.value });
      console.log('hit');
    };

    signInUser = e => {
      console.log('hit');
      userSignInWithEmailAndPassword(this.state.email, this.state.password)
        .then(person => {
          this.setState({ user: person.user });
        })
        .then(() => {
          this.props.loginUser(this.state.user.email);
        })
        .then(() => this.props.history.push('/edit'))
        .catch(err => console.log(err));
      e.preventDefault();
    };

    render() {
      const { email, password, user } = this.state;

      const otherProps = {
        email: email,
        password: password,
        handleSignIn: this.handleSignIn,
        signInUser: this.signInUser
      };
      return (
        <div>
          <WrappedComponent {...this.props} {...otherProps} />
        </div>
      );
    }
  }
  function mapStateToProps(state) {
    const user = state.reducer;
    return {
      user
    };
  }
  return connect(
    mapStateToProps,
    { loginUser }
  )(Sign);
};

export default theSign;

export const Form = props => {
  return (
    <div className="form-container">
      <form onSubmit={props.signed}>
        <p>Email</p>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={props.handleSignIn}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={props.handleSignIn}
        />
        <input type="submit" value={props.buttonText} />
      </form>
    </div>
  );
};
