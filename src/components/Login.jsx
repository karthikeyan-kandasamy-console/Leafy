import React, { Component } from 'react';
import './Login.scss'
import loginPng from "../assets/login.png"
import { Link } from 'react-router-dom'

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: '',
                password: ''
            },
            errors: {
                email: '',
                password: ''
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }));
    };

    validate = () => {
        let validationErrors = {};

 
        if (!this.state.formData.email || !/\S+@\S+\.\S+/.test(this.state.formData.email)) {
            validationErrors.email = 'Valid email is required';
        }

        if (!this.state.formData.password) {
            validationErrors.password = 'Password is required';
        }



        this.setState({
            errors: validationErrors
        });

        return Object.keys(validationErrors).length === 0;
    };

    handleSubmit(e) {
        // alert("Hello")
        e.preventDefault();
        if (this.validate()) {
            console.log('Form submitted successfully with data:', this.state.formData);
        }
    };

    render() {
        const { formData, errors } = this.state;
        return (
            <div id='login'>
                <div className="login-content">
                    <div className="left">
                        <h2>Sign In</h2>

                        <form onSubmit={this.handleSubmit}>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Enter Email'
                                    value={formData.email}
                                    onChange={this.handleChange}
                                />
                                <br />
                                {errors.email && <p className='red'>{errors.email}</p>}
                            </div>

                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Enter Password'
                                    value={formData.password}
                                    onChange={this.handleChange}
                                />
                                <br />
                                {errors.password && <p className='red'>{errors.password}</p>}
                            </div>

                            <button className='submit-btn' type="submit">Sign In</button>
                        </form>
                    </div>

                    <div className="right">
                        <h1>Sign in to <br /> Leafy is simple</h1>
                        <img className='login-img' src={loginPng} alt="Login" />
                        <p>If you don't have an account <Link to="/register" className='link-register'>Register Here!</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login