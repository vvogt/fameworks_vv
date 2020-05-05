import React from 'react';
import newspapersImg from '../assets/images/newsletters.png'

class SignupSection extends React.Component {
   render() {
      return(
         <div className="section_signup">
            <img src={newspapersImg} alt="newspapers"/>
            <div className="text">
               <h2>{this.props.title}</h2>
               <ul>
                  {this.props.listPoints.map((item, index) =>
                     <li key={index}>{item}</li>
                  )}
               </ul>
            </div>
            <div className="buttonContainer">
               <button button>{this.props.buttonText}</button>
            </div>
         </div>
      )
   }
}

export default SignupSection;