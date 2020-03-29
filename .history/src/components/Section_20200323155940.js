import React from 'react';

class Block extends React.Component {
   renderTab = (tabName) => {
      return <li>{tabName}</li>
   }

  render() {
    return (
      <div className={'section ' + this.props.backClass}>
        <h2>{this.props.headerText}</h2>

        <ul>{Object.keys(this.props.content).map.renderTab}</ul>
      </div>
    );
  }
}

export default Block;
