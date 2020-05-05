import React from 'react';
import Categories from './Categories';

class MapSection extends React.Component {
  state = {
    activeTab: this.props.categories[0],
  };

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  renderDirections = () => {
    return (
      <div className="directions">
        <div className="directions__map"></div>
        <div className="directions__text">
          <h3>Location</h3>
          <p>Barbican Centre</p>
          <p>Silk Street, London</p>
          <p>Silk Street, London</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="section_map">
        <h2>{this.props.title}</h2>
        <Categories categories={this.props.categories} setActiveTab={this.setActiveTab} activeTab={this.state.activeTab} />
        {this.renderDirections()}
      </div>
    );
  }
}

export default MapSection;