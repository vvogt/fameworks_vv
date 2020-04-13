import React from 'react';

class Block extends React.Component {
  setBgImage = imageUrl => {
    let bgImageStyle = {
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '250px',
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
              <div className="articlePreview__description">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </div>
          </li>
        );
      })
    );
  };

  renderNumOfArticles = (tabs, tabName, numToRender) => {
    let articles = [];

    for (let i = 0; i < numToRender; i++) {
      let article = tabs[tabName][i];
      articles.push(article);
    }
    
    return articles.map(article => {
      return (
        <li key={article.id}>
          <div className="articlePreview">
            <div
              className="arcticlePreview__image"
              style={this.setBgImage(article.imageUrl)}
            />
            <div className="articlePreview__description">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </div>
        </li>
      );
    });
    
  }

  changeActiveTab = tabName =>  {
    this.props.activeTab = tabName;
  }

  checkActiveTab = tab => {
    return tab == this.props.activeTab ? "active" : "inactive"
  }

  renderCategoryNames = tabs => {
    return Object.keys(tabs).map(category => {
      return (
        <li 
          key={category} 
          className={this.checkActiveTab(category)}
          onClick={() => this.props.setActiveTab(category)}
        >
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
          <ul>
            {this.renderCategoryNames(this.props.content)}
            <li key="emptySpace"></li>
          </ul>
        </div>
        <div className="articlePreviews">
          <ul>
            {this.renderNumOfArticles(this.props.content, this.props.activeTab, 3)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Block;
