import React from 'react';

class Block extends React.Component {
  renderTabs = (tabName) => {
    return <li>{tabName}</li>
  }

  render() {
    return (
      <div className={`section_${this.props.title.toLowerCase()}`}>
        <h2>{this.props.title}</h2>
        <ul>{this.props.content.renderTabs(this)}</ul>
      </div>
    );
  }
}

export default Block;
