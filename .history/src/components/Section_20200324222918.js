import React from 'react';

class Block extends React.Component {
  renderArticles = (tabs) => {
    return(
      Object.keys(tabs).map(
        tabName => {
          return (
            <li key={tabName}>
              {tabs[tabName].map(
                article => {
                  return (
                    <div className="article">
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                    </div>
                  );
                }
              )}
            </li>
          );
        }
      )
    )
  }

  renderCategoryNames = (tabs) => {
    return (
      Object.keys(this.props.content).map(category => {
        return <li key={category}>{category}</li>;
      });
    )
  }

  render() {
    return (
      <div className={`section_${this.props.title.toLowerCase()}`}>
        <h2>{this.props.title}</h2>
        <div className="categoryTabs">
          <ul>
            
          </ul>
        </div>
        {/* <ul>{this.renderArticles(this.props.content)}</ul> */}
      </div>
    );
  }
}

export default Block;
