import React from 'react';
import Categories from './Categories';

class DirectionsSection extends React.Component {
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
          <h2>Location</h2>
          <p>
            Barbican Centre <br/>
            Silk Street, London <br/>
            EC2Y, 8DS <br/>
          </p>

          <h2>Box Office:</h2>
          <p>033 4892 0987</p>

          <h2>The Barbican Center is open:</h2>
          <p>
            Mon-Sat: 9am-11pm <br/>
            Sun: 11am-11pm
          </p>
          <a href="http://wwww.google.com">See our opening hours for other venues</a>
        </div>
      </div>
    );
  }

  renderPTInstructions = () => {
    return <div className="directions"><p className="takeAbus">Take a bus for example</p></div>
  }

  render() {
    return (
      <div className="section_directions">
        <h2>{this.props.title}</h2>
        <Categories categories={this.props.categories} setActiveTab={this.setActiveTab} activeTab={this.state.activeTab} />

        {this.state.activeTab === "Getting here" ? this.renderDirections() : this.renderPTInstructions()}
      </div>
    );
  }
}

export default DirectionsSection;