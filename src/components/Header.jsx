import React, { Component } from 'react';
import './Header.scss';
import logo from '../logo.png';
import { Link,NavLink } from 'react-router-dom';
import cart from '../assets/cart.svg';

export class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }   

    render() {
        return (
            <div id="header">

                <header>
                    <div className="logo">
                        <h2>Leafy</h2>
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className="navigations">

                        <NavLink className={(navData) => (navData.isActive ? "active-link" : 'link')} to="/">Home</NavLink>
                        <NavLink className={(navData) => (navData.isActive ? "active-link" : 'link')} to="/product">Product</NavLink>
                        <NavLink className={(navData) => (navData.isActive ? "active-link" : 'link')} to="/about">About Us</NavLink>
                        <NavLink className={(navData) => (navData.isActive ? "active-link" : 'link')} to="/support">Contact</NavLink>

                    </div>

                    <div className="icons">
                        <Link to="/cart">
                            <img src={cart} alt="cart" to="/cart" />
                            
                        </Link>

                        <Link className="link" to="/login"> Login</Link>
                    </div>
                </header>

            </div>
        )
    }
}

export default Header