import React from 'react';
import Header from './Header';
import Landing from './Landing';
import { Routes, Route } from 'react-router-dom';
import Product from './Product';
import About from './About';
import Support from './Support';
import Login from './Login';
import Register from './Register';

const PlaceHolder = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/support" element={<Support />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="*" element={<div>Not Found</div>}></Route>
            </Routes>
        </div>
    )
}

export default PlaceHolder;