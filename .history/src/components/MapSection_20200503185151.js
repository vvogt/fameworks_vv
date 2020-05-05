import React from 'react';
import Categories from './Categories';

class MapSection extends React.Component {
   state = {
      activeTab: this.props.categories[0];
   }

   render () {
      return(
         <div className="section_map">
            <h2>{this.props.title}</h2>
            <Categories

            />
         </div>
      )
   }
}

export default MapSection;