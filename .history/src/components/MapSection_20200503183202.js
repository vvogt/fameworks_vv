import React from 'react';

class MapSection extends React.Component {
   render () {
      return(
         <div className="section_map">
            <h2>{this.props.title}</h2>
         </div>
      )
   }
}

export default MapSection;