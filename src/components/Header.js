import React from 'react';
import Login from '../assets/icons/icon_login_150x150.svg';
import Search from '../assets/icons/icon_search_150x150.svg';

class Header extends React.Component {
   render() {
      return (
        <div className="header">
          <div className="header__main">
            <div className="logo">bardican</div>
            <div className="header__main__right">
              <input
                className="search"
                type="text"
                style={{
                   backgroundImage: `url(${Search})`,
                   backgroundRepeat: `no-repeat`,
                   backgroundPosition: `right 12px bottom 11px`,
                   backgroundSize: `20px 20px` 
               }}
              />
              <img className="search-icon" src={Search} alt="search icon" />
              <div className="login">
                <img className="login-icon" src={Login} alt="log in icon" />
                <span>Log In</span>
              </div>
            </div>
          </div>
          <div className="header__nav">
             <ul>
                <li>What's on</li>
                <li>Your visit</li>
                <li>Join & support</li>
                <li>Take part</li>
                <li>Our story</li>
                <li>Hire</li>
                <li>Read, watch & listen</li>
                <li>Shop</li>
             </ul>
          </div>
        </div>
      );
   }
}

export default Header;