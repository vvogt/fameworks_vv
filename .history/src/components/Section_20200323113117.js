import React from 'react';

class Section extends React.Component {
   renderTab = (tabName) => {
      return <li>{tabName}</li>
   }

  render() {
    return (
      <div className={'section '}>
        <h2>{this.props.title}</h2>
{/*         <ul>{this.props.content.articles[0].title}</ul> */}
        <ul>{this.props.content.articles.map}</ul>
      </div>
    );
  }
}

export default Section;
