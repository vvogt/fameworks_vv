import React from 'react';

class Block extends React.Component {
   renderTab = (tabName) => {
      return <li>{tabName.title}</li>
   }

  render() {
    return (
      <div className={'section ' + this.props.backClass}>
        <h2>{this.props.headerText}</h2>

        <ul>
          {
            this.props.content.keys().map(function(key, index) {
            })
          }
        </ul>
      </div>
    );
  }
}

export default Block;
