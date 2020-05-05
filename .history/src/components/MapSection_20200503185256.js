import React from 'react';
import Categories from './Categories';

class MapSection extends React.Component {
   state = {
      activeTab: this.props.categories[0]
   }

   render () {
      return(
         <div className="section_map">
            <h2>{this.props.title}</h2>
            <Categories
               categories={this.props.categories}
            />
         </div>
      )
   }
}

export default MapSection;