import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/store';

import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Partners from './components/partners/Partners';
import Ownership from './components/ownership/Ownership';
import Future from './components/future/Future';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
    return (
        <Provider store={store}>
            <div>
                <Header />
                <About />
                <Services />
                <Ownership />
                <Partners />
                <Future />
                <Contact />
                <Footer />
            </div>
        </Provider>
    );
}

export default App;
