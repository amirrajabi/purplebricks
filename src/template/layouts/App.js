/**
 * Created by Amir on 9/5/17.
 */

/*
 * Import packages and components
 * */
import React, {Component} from 'react';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import SecureNegotiationCenterPage from './secure-negotiation-centre-page';

class App extends Component {
    render() {
        return (
            <section className="App">

                <Header/>

                <SecureNegotiationCenterPage/>

                <Footer/>

            </section>
        );
    }
}

export default App;
