import React from 'react';

class Block extends React.Component {
  renderTabs = (tabs) => {
    return <li>
      {Object.keys(tabs).map(tabName => {
        return (
          <h3>tabs[tabName].title</h3>
          <p>tabs[tabName].description</p>
        );
        }
      )}
    </li>
  }

  render() {
    return (
      <div className={`section_${this.props.title.toLowerCase()}`}>
        <h2>{this.props.title}</h2>
        <ul>{this.renderTabs(this.props.content)}</ul>
      </div>
    );
  }
}

export default Block;
