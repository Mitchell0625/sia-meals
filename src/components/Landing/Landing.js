import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSliderImages } from '../../ducks/reducer';
import LandSlide from './LandSlide/LandSlide';
import './Landing.css';

class Landing extends Component {
  componentDidMount = () => {
    this.props.getSliderImages();
  };

  nextImage = id => {};
  render() {
    let slider = this.props.sliderImages.map(e => {
      return <LandSlide key={e.id} name={e.name} url={e.url} />;
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
  { getSliderImages }
)(Landing);
