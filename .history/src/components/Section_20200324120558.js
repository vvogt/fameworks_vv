import React from 'react';

class Block extends React.Component {
  renderTab = (tabName) => {
    return <li>{tabName}</li>
  }

  render() {
    return (
      <div className={`section_${this.props.title.toLowerCase()}`}>
        <h2>{this.props.title}</h2>
        <ul>{Object.keys(this.props.content).map}</ul>
      </div>
    );
  }
}

export default Block;
