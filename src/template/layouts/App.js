/**
 * Created by Amir on 9/5/17.
 */

import React, { Component } from 'react';
import logo from '../../assets/images/logo.jpg';
import NavBar from '../components/global/NavBar';
import SecureNegotiationCenterPage from './secure-negotiation-centre-page';

class App extends Component {
  render() {
    return (
      <section className="App">

          <NavBar logo={logo}
                  title="Secure negotiation centre"/>

        <SecureNegotiationCenterPage/>

      </section>
    );
  }
}

export default App;
