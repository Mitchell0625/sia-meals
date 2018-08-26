import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSliderImages, getAbout } from '../../ducks/reducer';
import LandSlide from './LandSlide/LandSlide';
import About from '../About/About';
import Contact from '../Contact/Contact';
import './Landing.css';

class Landing extends Component {
  componentDidMount = () => {
    this.props.getSliderImages();
    this.props.getAbout();
  };

  nextImage = id => {};
  render() {
    let slider = this.props.sliderImages.map(e => {
      return <LandSlide key={e.id} name={e.name} url={e.url} />;
    });

    const about = this.props.about.map(e => {
      return <About key={e.id} text={e.text} />;
    });
    return (
      <div className="landing-container">
        <section className="landing__slider">
          <div className="landing__slider__div">{slider}</div>
        </section>
        <section>{about}</section>
        <section>
          <Contact />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(
  mapStateToProps,
  { getSliderImages, getAbout }
)(Landing);
