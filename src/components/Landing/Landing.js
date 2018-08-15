import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../../ducks/reducer';
import LandSlide from './LandSlide/LandSlide';
import './Landing.css';

class Landing extends Component {
  componentDidMount = () => {
    this.props.getImages();
  };
  render() {
    let slider = this.props.images.map(e => {
      return <LandSlide key={e.id} url={e.url} />;
    });
    return (
      <div className="landing-container">
        <section className="landing__slider">
          <div className="landing__slider__div">{slider}</div>
        </section>
        <section>About</section>
        <section>Contact</section>
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
)(Landing);
