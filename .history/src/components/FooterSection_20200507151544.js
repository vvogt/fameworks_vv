import React from 'react';
import { Component } from 'react';

class FooterSection extends React.Component {
   state = {
      activeOption: Object.keys(this.props.contactOptions)[0],
      currentContent: this.props.contactOptions[Object.keys(this.props.contactOptions)[0]]
   }

   renderOptions = (options) => {
      console.log(options);
      return options.map((optionName, index) => {
         return <option value={optionName} key={index}>{optionName}</option>
      });
   }

   handleChange = (e) => {
      let value = e.target.value;
      this.setState({
         activeOption: value,
         currentContent: this.props.contactOptions[value]
      })
      console.log(this.state);
   }

   render() {
      return <footer>
         <div className="contacts">
            <h2>{this.props.title}</h2>
            <div className="contacts__content">
               <div className="contacts__content__left">
                  <label htmlFor="contactOptions">About</label>
                  <select name="contact_options" id="contactOptions" onChange={(e) => this.handleChange(e)}>
                     {this.renderOptions(Object.keys(this.props.contactOptions))}
                  </select>
               </div>
               <div className="contacts__content__right">
                  <h3>{this.state.currentContent.title}</h3>
                  {this.state.currentContent.description && <p>{this.state.currentContent.description}</p>}
                  {this.state.currentContent.mail && <a href={`mailto: ${this.state.currentContent.mail}`}>{this.state.currentContent.mail}</a>}
                  {this.state.currentContent.mailInfo && <div className="mail_info">{this.state.currentContent.mailInfo}</div>}
                  {this.state.currentContent.phone && <a href={`tel: ${this.state.currentContent.phone}`}>{this.state.currentContent.phone}</a>}
                  {this.state.currentContent.phoneInfo && <div className="phone_info">{this.state.currentContent.phoneInfo}</div>}
               </div>
            </div>
         </div>
      </footer>;
   }
}

export default FooterSection;

