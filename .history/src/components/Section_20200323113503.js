import React from 'react';

class Section extends React.Component {
   renderTab = (tab) => {
      return (
        <li>
          <div className="">
            <h3>{tab.title}</h3>
            <p>{tab.description}</p>
          </div>
        </li>
      );
   }

  render() {
    return (
      <div className={'section highlights'}>
        <h2>{this.props.title}</h2>
{/*         <ul>{this.props.content.articles[0].title}</ul> */}
        <ul>{this.props.content.articles.map(this.renderTab)}</ul>
      </div>
    );
  }
}

export default Section;
