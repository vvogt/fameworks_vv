import React from 'react';
import { setBgImage } from '../helpers.js';
import arrowRight from '../assets/icons/icon_arrow_30x30.svg';

class Section extends React.Component {
  renderArticles = (tabs, tabName) => {
  console.log(tabs[tabName].length;
    return tabs[tabName].map((article) => {
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
  };

  renderNumOfArticles = (tabs, tabName, numToRender) => {
    let articles = [];

    for (let i = 0; i < numToRender; i++) {
      let article = tabs[tabName][i];
      articles.push(article);
    }

    return articles.map((article) => {
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
  };

  changeActiveTab = (tabName) => {
    this.props.activeTab = tabName;
  };

  checkActiveTab = (tab) => {
    return tab === this.props.activeTab ? 'active' : 'inactive';
  };

  renderCategoryNames = (tabs) => {
    return Object.keys(tabs).map((category) => {
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

  renderCategories = (renderOrNot) => {
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
  };

  scrollCarousel = (scrollId, direction) => {
    let container = document.getElementById(scrollId);
    let ul = container.getElementsByTagName('UL')[0];
    let li = ul.getElementsByTagName('li')[0];
    let widthToScroll = li.offsetWidth + 20;
    let scrollPos = container.scrollLeft;

    if(direction === "left") {
      scrollPos -= widthToScroll;
    } else {
      scrollPos += widthToScroll;
    }
    
    container.scroll({
      left: scrollPos,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <div className="section_previews">
        <h2>{this.props.title}</h2>

        {/* Render categories only if the showCategories prop is set to 'true' */}
        {this.renderCategories(this.props.showCategories)}

        <button
          className="arrow left"
          onClick={() => this.scrollCarousel(this.props.scrollId, 'left')}
        >
          <img src={arrowRight} alt="button arrow" />
        </button>

        <div className="articlePreviews" id={this.props.scrollId}>
          <ul>
            {
              this.renderArticles(
                this.props.content,
                this.props.activeTab,
              )
            }
          </ul>
        </div>

        <button
          className="arrow right"
          onClick={() => this.scrollCarousel(this.props.scrollId, 'right')}
        >
          <img src={arrowRight} alt="button arrow" />
        </button>
      </div>
    );
  }
}

export default Section;
