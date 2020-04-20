import React from 'react';
import { setBgImage } from '../helpers.js';
import bgImage from '../assets/images/parallax_bg.jpg'

class ParallaxSection extends React.Component {
   render() {
      return (
        <div className="section_parallax" style={setBgImage(bgImage, 'fixed')}>
          <div className="section_parallax__left">
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
          </div>
          <div className="section_parallax__right">
            <button>{this.props.btnText}</button>
          </div>
        </div>
      );
   }
}

export default ParallaxSection;