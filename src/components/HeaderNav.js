import React from 'react';
import { setBgImage } from '../helpers.js'

class HeaderNav extends React.Component {

   renderMenuItems = () => {
      const menuItems = Object.keys(this.props.menuContent);
      return menuItems.map((item, index) => {
         let handleArrow = this.props.menuContent[item].length > 0 ? true : false;
         return <li 
            key={index}
            className={handleArrow ? 'withArrow' : ''}
            onMouseEnter={() => handleArrow && this.props.showMenu(item)}
            >
               {item}
            </li>
      })
   }

   replaceSpaces = (page, subpage) => {
      const searchRegExp = / /g;
      const pageNew = page.replace(searchRegExp, "-");
      const subpageNew = subpage.replace(searchRegExp, "-");
      return `/${pageNew.toLowerCase()}/${subpageNew.toLowerCase()}`
   }

   renderList = (category) => {
      return category.content.map((item, index) => {
         return <li key={index}>
            <a href={this.replaceSpaces(category.title, item)}>{item}</a>
         </li>
      })
   }

   renderGallery = (category) => {
      return category.content.map((item, index) => {
         return <li key={index}>
            {console.log(item.image)}
            <div key={index} className="previewImage" style={setBgImage(item.image, 'scroll', '130px')}/>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
         </li>
      })
   }

   renderColumnContent = (category) => {
      if(category.type === 'gallery') {
         return <ul className='gallery'>
            {this.renderGallery(category)}
         </ul>   
      } else {
         return <ul>
            {this.renderList(category)}   
         </ul>
      }
   }

   renderMenuContent = () => {
      return this.props.menuContent[this.props.menuShown].map((item, index) => {
         return (
            <div className={`menu_column ${item.type}`}>
               <h3 key={index}>{item.title}</h3>
               {this.renderColumnContent(item)}
               {item.type === 'bulletList' && <a href="./calendar" className="button">Event Calendar</a>}
            </div>
         ) 
      })
   }

   render() {
      return(
         <nav className="header__nav">
            <div className="header__nav_categories">
               <ul>
                  {this.renderMenuItems()}
               </ul>
            </div>
            { this.props.menuShown && <div className="header__nav_menu-open">
               {this.renderMenuContent()}
            </div> }
         </nav>
      )
   }

}

export default HeaderNav;