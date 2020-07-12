import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

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
import NotFound from './components/NotFound/404';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <React.Fragment>
                    <Switch>
                        <Route path='/' exact>
                            <Header />
                            <About />
                            <div></div>
                            <Services />
                            <Ownership />
                            <Partners />
                            <Future />
                            <Contact />
                            <Footer />
                        </Route>
                        <Route path='/404' component={NotFound} />
                        <Redirect from='*' to='/404' />
                    </Switch>
                </React.Fragment>
            </Router>
        </Provider>
    );
}

export default App;
