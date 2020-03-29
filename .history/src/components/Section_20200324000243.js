import React from 'react';

class Block extends React.Component {
   renderTab = (tabName) => {
      return <li>{tabName}</li>
   }

  render() {
    return (
      <div className={'section${this.props.title}'}>
        <h2>{this.props.title}</h2>

        <ul>{Object.keys(this.props.headerText)}</ul>
      </div>
    );
  }
}

export default Block;
