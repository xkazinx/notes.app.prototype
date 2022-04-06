import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

/*
function Food()
{
    return (
        <>
        Food
        </>
    );
}

function Money()
{
    return (
        <>
        Money
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<App />} />
            <Route path="food" element={<Food />} />
            <Route path="money" element={<Money />} />
            </Routes>
        </BrowserRouter>

        //<div className="container">
          //  <Sidebar />
        //</div>
    );
}
*/

function App() {
    return (
        <div className="container">
          <Sidebar />
        </div>
    );
}

if (document.getElementById('main-app')) {
    ReactDOM.render(<App />, document.getElementById('main-app'));
}

if (document.getElementById('navbar-items')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar-items'));
}

