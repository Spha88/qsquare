import React from 'react';
import './App.css';

import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Partners from './components/partners/Partners';
import Ownership from './components/ownership/Ownership';
import Future from './components/future/Future';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <Ownership />
            <Partners />
            <Future />
            <Footer />
        </div>
    );
}

export default App;
