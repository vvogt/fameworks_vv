import React from 'react';
import Header from './Header';
import Hero from './Hero';

class Main extends React.Component {
   render() {
      return (
         <div className="wrapper">
            <Header/>
            <Hero/>
         </div>
      );
   }
}

export default Main;