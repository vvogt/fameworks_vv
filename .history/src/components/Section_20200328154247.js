import React from 'react';

class Block extends React.Component {
  renderArticles = (tabs) => {
    const bgImageStyle = {{
      backgroundImage: url(`${article.imageUrl}`),

    }}

    return(
      Object.keys(tabs).map(
        tabName => {
          return (
            <li key={tabName}>
              {tabs[tabName].map( article => {
                return (
                  <div className="article">
                    <div className="arcticle__image" style={{background: `url(${article.imageUrl})`}}></div>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                  </div>
                );}
              )}
            </li>
          );
        }
      )
    )
  }

  renderCategoryNames = (tabs) => {
    return (
      Object.keys(tabs).map(category => {
        return <li key={category}>{category}</li>;
      })
    )
  }

  render() {
    return (
      <div className={`section_${this.props.title.toLowerCase()}`}>
        <h2>{this.props.title}</h2>
        <div className="categoryTabs">
          <ul>
            {this.renderCategoryNames(this.props.content)}
          </ul>
        </div>
        <ul>{this.renderArticles(this.props.content)}</ul>
      </div>
    );
  }
}

export default Block;
