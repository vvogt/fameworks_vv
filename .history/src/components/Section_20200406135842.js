import React from 'react';

class Block extends React.Component {
  setBgImage = imageUrl => {
    let bgImageStyle = {
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    };

    return bgImageStyle;
  };

  renderArticles = (tabs, tabName) => {
    return (
      tabs[tabName].map(article => {
        return (
          <li key={article.id}>
            <div className="articlePreview">
              <div
                className="arcticle__image"
                style={this.setBgImage(article.imageUrl)}
              />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </li>
        );
      })
    );
  };


  renderCategoryNames = tabs => {
    return Object.keys(tabs).map(category => {
      return (
        <li key={category} onClick={changeActiveTab(category)}>
          <h3>{category}</h3>
        </li>
      );
    });
  };

  render() {
    return (
      <div className={`section_${this.props.title.toLowerCase()}`}>
        <h2>{this.props.title}</h2>
        <div className="categoryTabs">
          <ul>{this.renderCategoryNames(this.props.content)}</ul>
        </div>
        <div className="articlePreviews">
          <ul>
            {this.renderArticles(this.props.content, this.props.activeTab)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Block;
