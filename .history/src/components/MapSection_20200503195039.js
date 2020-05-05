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
          <p>EC2Y, 8DS</p>
          <h3>Box Office:</h3>
          <p>033 4892 0987</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="section_map">
        <h2>{this.props.title}</h2>
        <Categories categories={this.props.categories} setActiveTab={this.setActiveTab} activeTab={this.state.activeTab} />
        {this.state.activeTab === "Getting here" ? this.renderDirections() : console.log('ei')}
      </div>
    );
  }
}

export default MapSection;