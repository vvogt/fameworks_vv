import React from 'react';

class Section extends React.Component {
   renderTab = (tab) => {
      return (
        <li>
          <h3>{tab.title}</h3>
        </li>
      );
   }

  render() {
    return (
      <div className={'section '}>
        <h2>{this.props.title}</h2>
{/*         <ul>{this.props.content.articles[0].title}</ul> */}
        <ul>{this.props.content.articles.map(this.renderTab)}</ul>
      </div>
    );
  }
}

export default Section;
