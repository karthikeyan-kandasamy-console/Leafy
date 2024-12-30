import React, { Component } from 'react'
import './Landing.scss'
import LandingPNG from '../assets/landing.png'

export class Landing extends Component {
    render() {
        return (
            <div id='landing'>

                <div className="banner">
                    <div className="logo">
                        <img src={LandingPNG} alt="Landing" />

                    </div>

                    <div className="content">

                        <h1>Let’s now shopFor daily food & necessary.</h1>

                        <p>Freshness and Speed at your Fingertips: Get groceries delivered in 30 Minutes with our website or mobile app.</p>

                        <div className="btns">
                            <button>Order Now</button>
                            <button>Go to Cart</button>
                        </div>

                    </div>
                </div>

                <div className="trust">

                    <div className="item">
                        <i className="fa-solid fa-headset"></i>
                        <div className="item-content">
                            <h4>Support 24/7</h4>
                            <p>Dedicated support</p>
                        </div>
                    </div>
                    <div className="item">
                        <i className="fa-solid fa-check"></i>
                        <div className="item-content">
                            <h4>Secure Payment</h4>
                            <p>Ensure your money is safe</p>
                        </div>
                    </div>
                    <div className="item">
                        <i className="fa-solid fa-arrow-rotate-left"></i>
                        <div className="item-content">
                            <h4>Refundable</h4>
                            <p>Damage items can refund it</p>
                        </div>
                    </div>
                    <div className="item">
                        <i className="fa-solid fa-truck-fast"></i>
                        <div className="item-content">
                            <h4>Free Shipping</h4>
                            <p>Order over 399Rs</p>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Landing