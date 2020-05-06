import React from 'react';
import { Component } from 'react';

class FooterSection extends React.Component {
   render() {
      return <footer>
         <div className="contacts">
         <h2>{this.props.title}</h2>

         </div>
      </footer>;
   }
}

