import React from 'react';

class ParallaxSection extends React.Component {
   render() {
      return(
         <div className="section_parallax">
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
         </div>
      )
   }
}