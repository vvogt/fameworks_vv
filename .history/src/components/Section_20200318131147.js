import React from 'react';

class Section extends React.Component {
   renderTab = (tabName) => {
      return <li>{tabName}</li>
   }

  render() {
    return (
      <div className={'section '}>
        <h2>{this.props.title}</h2>
        <ul>{this.props.tabs.map(this.renderTab)}</ul>
      </div>
    );
  }
}

export default Section;
