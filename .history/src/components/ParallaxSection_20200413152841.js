import React from 'react';

class ParallaxSection extends React.Component {
   render() {
      return(
         <div className="section_parallax">
            <div className="section_parallax__left">
               <h2>{this.props.title}</h2>
               <p>{this.props.content}</p>
            </div>
            <div className="section_parallax__right">
               <button>
                  {this.props.btnText}
               </button>
            </div>
         </div>
      )
   }
}

export default ParallaxSection;