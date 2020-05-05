import React from 'react';
import Categories from './Categories';

class MapSection extends React.Component {
  state = {
    activeTab: this.props.categories[0],
  };

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    return (
      <div className="section_map">
        <h2>{this.props.title}</h2>
        <Categories categories={this.props.categories} setActiveTab={this.setActiveTab} />
      </div>
    );
  }
}

export default MapSection;