import React from 'react';
import './App.css';

import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/servicesb/Services';
import Partners from './components/partners/Partners';
import Ownership from './components/ownership/Ownership';

function App() {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <Partners />
            <Ownership />
        </div>
    );
}

export default App;
