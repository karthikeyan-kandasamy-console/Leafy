import React, { Component } from 'react'
import './Register.scss'
import registerPng from "../assets/signup.png"
import { Link } from 'react-router-dom'

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                name: '',
                email: '',
                password: '',
                repassword: ''
            },
            errors: {
                name: '',
                email: '',
                password: '',
                repassword: ''
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

        if (!this.state.formData.name) {
            validationErrors.name = 'Name is required';
        }

        if (!this.state.formData.email || !/\S+@\S+\.\S+/.test(this.state.formData.email)) {
            validationErrors.email = 'Valid email is required';
        }

        if (!this.state.formData.password) {
            validationErrors.password = 'Password is required';
        }

        if (this.state.formData.password !== this.state.formData.repassword) {
            validationErrors.repassword = 'Passwords must match';
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
                        <h2>Sign up</h2>

                        <form onSubmit={this.handleSubmit}>
                            <div>
                                
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Enter Name'
                                    value={formData.name}
                                    onChange={this.handleChange}
                                />
                                <br />
                                {errors.name && <p className='red'>{errors.name}</p>}
                            </div>

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

                            <div>
                                <input
                                    type="password"
                                    name="repassword"
                                    placeholder='Re-enter Password'
                                    value={formData.repassword}
                                    onChange={this.handleChange}
                                />
                                <br />
                                {errors.repassword && <p className='red'>{errors.repassword}</p>}
                            </div>

                            <button className='submit-btn' type="submit">Sign Up</button>
                        </form>
                    </div>

                    <div className="right">
                        <h1>Sign Up to <br /> Leafy is simple</h1>
                        <img className='register-img' src={registerPng} alt="Login" />
                        <p>If you already have an account <Link to="/login" className='link-register'>Login Here!</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register