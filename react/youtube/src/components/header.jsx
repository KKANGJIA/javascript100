import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header__logo">
                    <i className="fab fa-youtube"></i>
                    <span className="header__logo__name">Youtube</span>
                </div>
                <div className="search">
                    <input type="text" className="search__input" placeholder="search..."></input>
                    <div className="search__icon">
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;

