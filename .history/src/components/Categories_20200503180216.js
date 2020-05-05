import React from 'react';

class Categories extends React.Component {
  checkActiveTab = (tab) => {
    return tab === this.props.activeTab ? 'active' : 'inactive';
  };

  renderCategoryNames = (tabs) => {
     console.log('jookseb');
    return tabs.map((category, index) => {
      return (
        <li
          key={index}
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
       <div className="categoryTabs">
         <ul>
           {this.renderCategoryNames(this.props.categories)}
           <li key="emptySpace"></li>
         </ul>
       </div>
     );
  }
}

export default Categories;