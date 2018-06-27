import React, { Component } from 'react';
import Logo from '../../images/xavor_logo.png';
import './Navbar.css';

class Header extends Component {
    render(){
        return (
            <div className="header">
                    <img src={Logo} alt="company-logo"/>
                    <span><b>{this.props.title}</b></span>
                    {this.props.children}
            </div>
        );
    }
}

export default Header;