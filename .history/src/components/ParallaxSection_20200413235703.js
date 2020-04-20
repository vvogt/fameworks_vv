import React from 'react';
import { setBgImage } from '../helpers.js';
import bgImage from '../assets/images/parallax_bg.jpg'

class ParallaxSection extends React.Component {
   render() {
      return(
         <div className="section_parallax">
            <div className="section_parallax__left">
               <h2>{this.props.title}</h2>
               <p>{this.props.content}</p>
            </div>
            <div className="section_parallax__right" style={setBgImage(bgImage)}>
               <button>
                  {this.props.btnText}
               </button>
            </div>
         </div>
      )
   }
}

export default ParallaxSection;