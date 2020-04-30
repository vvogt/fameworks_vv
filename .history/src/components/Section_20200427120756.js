import React from 'react';
import { setBgImage } from '../helpers.js';

class Section extends React.Component {
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
              style={setBgImage(article.imageUrl, 'scroll')}
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
    return tab === this.props.activeTab ? "active" : "inactive"
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

  renderCategories = renderOrNot => {
    if (renderOrNot) {
      return (
        <div className="categoryTabs">
          <ul>
            {this.renderCategoryNames(this.props.content)}
            <li key="emptySpace"></li>
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="section_previews">
        <h2>{this.props.title}</h2>
        {/* Render categories only if the showCategories prop is set to 'true' */}
        {this.renderCategories(this.props.showCategories)}
        <div className="arrow left"/>
        <div className="articlePreviews">
          <ul>
            {this.renderNumOfArticles(this.props.content, this.props.activeTab, this.props.numToRender)}
          </ul>
        </div>
        <div className="arrow right"/>
      </div>
    );
  }
}

export default Section;
