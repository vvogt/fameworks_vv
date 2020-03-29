import React from 'react';

class Section extends React.Component {
   renderTab = (tab) => {
      return (
        <li>
          <div className="section highlights__tab">
            <h3>{Object.keys(tab)}</h3>
          </div>
        </li>
      );
   }

  render() {
    return (
      <div className='section highlights'>
        <h2>{this.props.title}</h2>
        <ul>{this.props.content.map(this.renderTab)}</ul>
{/*         <ul>{this.props.content.map(this.renderTab)}</ul> */}
      </div>
    );
  }
}

export default Section;
