import React from 'react';
import { setBgImage } from '../helpers.js';
import arrowRight from '../assets/icons/icon_arrow_30x30.svg';
import Categories from './Categories';

class Section extends React.Component {
  state = {
    activeTab: Object.keys(this.props.content)[0],
  };

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  renderArticles = (tabs, tabName) => {
    return tabs[tabName].map((article, index) => {
      return (
        <li key={index}>
          <div className="articlePreview">
            <div
              className="arcticlePreview__image"
              style={setBgImage(article.imageUrl, 'scroll', '250px')}
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

  scrollCarousel = (scrollId, direction) => {
    let container = document.getElementById(scrollId);
    let ul = container.getElementsByTagName('UL')[0];
    let li = ul.getElementsByTagName('li')[0];
    let widthToScroll = li.offsetWidth + 20;
    let scrollPos = container.scrollLeft;

    if (direction === 'left') {
      scrollPos -= widthToScroll;
    } else {
      scrollPos += widthToScroll;
    }

    container.scroll({
      left: scrollPos,
      behavior: 'smooth',
    });
  };

  renderLeftArrow() {
    return (
      <button
        className={`arrow left ${this.props.scrollId}`}
        onClick={() => this.scrollCarousel(this.props.scrollId, 'left')}
      >
        <img src={arrowRight} alt="button arrow" />
      </button>
    );
  }

  renderRightArrow() {
    return (
      <button
        className={`arrow right ${this.props.scrollId}`}
        onClick={() => this.scrollCarousel(this.props.scrollId, 'right')}
      >
        <img src={arrowRight} alt="button arrow" />
      </button>
    );
  }

  render() {
    const handleArrows =
      this.props.content[this.state.activeTab].length > 3 ? true : false;
    console.log(handleArrows);

    return (
      <div className={`section_previews ${this.props.bgDarker && "bgDarker"}`} >
        <h2>{this.props.title}</h2>

        {/* Render categories only if the showCategories prop is set to 'true' */}
        {this.props.showCategories && (
          <Categories
            categories={Object.keys(this.props.content)}
            activeTab={this.state.activeTab}
            setActiveTab={this.setActiveTab}
          />
        )}

        {handleArrows && this.renderLeftArrow()}

        <div className="articlePreviews" id={this.props.scrollId}>
          <ul>
            {this.renderArticles(this.props.content, this.state.activeTab)}
          </ul>
        </div>

        {handleArrows && this.renderRightArrow()}
      </div>
    );
  }
}

export default Section;
