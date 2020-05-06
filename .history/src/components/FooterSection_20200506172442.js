import React from 'react';
import { Component } from 'react';

class FooterSection extends React.Component {
   renderOptions = (options) => {
      /* console.log(options);
      return options.map((optionName, index) => {
         return <option value={optionName} key={index}>{optionName}</option>
      }); */
   }

   render() {
      return <footer>
         <div className="contacts">
            <h2>{this.props.title}</h2>
            <div className="contacts__content">
               <label htmlFor="contactOptions">About</label>
               <select name="contact_options" id="contactOptions">
                  {this.renderOptions(Object.keys(this.props.contactOptions))}
               </select>
            </div>
         </div>
      </footer>;
   }
}

export default FooterSection;

