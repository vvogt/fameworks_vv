import React from 'react';

class Header extends React.Component {
   render() {
      return(
         <div className="header">
            <div className="header_main">
               <div className="logo">barbican</div>
            </div>
            <div className="header_nav"></div>
         </div>
      );
   }
}

export default Header;