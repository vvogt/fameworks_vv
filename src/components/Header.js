import React from 'react';
import Login from '../assets/icons/icon_login_150x150.svg';
import Search from '../assets/icons/icon_search_150x150.svg';
import HeaderNav from './HeaderNav';

class Header extends React.Component {
    state = {
      menuShown: '',
    }

    showMenu = (item) => {
      this.setState({ menuShown: item })
      console.log("showing:" + item)
      this.props.handleHeaderMenu(true)
    }

    hideMenu = () => {
      this.setState({ menuShown: '' })
      this.props.handleHeaderMenu(false)
    }

   render() {
      return (
        <div className={`header ${this.state.menuShown && 'open'}`}  onMouseLeave={this.hideMenu}>
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
          <HeaderNav
            menuContent={this.props.menuContent}
            showMenu={this.showMenu}
            hideMenu={this.hideMenu}
            menuShown={this.state.menuShown}
          />
        </div>
      );
   }
}

export default Header;