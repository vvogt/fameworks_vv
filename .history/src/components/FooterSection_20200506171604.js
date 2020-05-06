import React from 'react';
import { Component } from 'react';

class FooterSection extends React.Component {
   renderOptions = (options) => {
      return options.map((optionName) => {
         return <option value={optionName}>{optionName}</option>
      });
   }

   render() {
      return <footer>
         <div className="contacts">
            <h2>{this.props.title}</h2>
            <div className="contacts__content">
               <label htmlFor="contactOptions">About</label>
               <select name="contact_options" id="contactOptions">
                  {}
               </select>
            </div>
         </div>
      </footer>;
   }
}

export default FooterSection;

