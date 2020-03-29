import React from 'react';

class Section extends React.Component {
   renderTab = (tabName) => {
      return <li>{tabName}</li>
   }

  render() {
    return (
      <div className={'section '}>
        <h2>{this.props.title}</h2>
        <ul>{this.props.content.articles}</ul>
        {/* <ul>{this.props.content.articles.map(this.renderTab)}</ul> */}
      </div>
    );
  }
}

export default Section;
