/**
 * Created by Amir on 9/5/17.
 */

import React, {Component} from 'react';
import NavBar from '../components/global/NavBar';
import Footer from '../components/global/Footer';
import SecureNegotiationCenterPage from './secure-negotiation-centre-page';

class App extends Component {
    render() {
        return (
            <section className="App">

                <NavBar/>

                <div className="container">
                    <SecureNegotiationCenterPage/>
                </div>

                <Footer/>

            </section>
        );
    }
}

export default App;
