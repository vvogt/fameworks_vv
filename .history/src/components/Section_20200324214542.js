import React from 'react';

class Block extends React.Component {
  renderTabs = (tabs) => {
    return(
      Object.keys(tabs).map(
        tabName => {
          return (
            <li key={tabName}>
              {console.log(tabs[tabName])}
              <p>{tabs[tabName].title}</p>
            </li>
          );
        }
      )
    )
  }

  render() {
    return (
      <div className={`section_${this.props.title.toLowerCase()}`}>
        <h2>{this.props.title}</h2>
        {console.log(this.props.content["This week"])}
        <ul>{this.renderTabs(this.props.content)}</ul>
      </div>
    );
  }
}

export default Block;
