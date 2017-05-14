/**
 * Created by Amir on 9/5/17.
 */

/*
 * Import packages and components
 * */
import React, { Component } from 'react';
import StatusBar from './components/StatusBar';
import PropertyDetails from './components/PropertyDetails';
import BuyerDetails from './components/BuyerDetails';
import BuyerOffer from './components/BuyerOffer';
import YourResponse from './components/YourResponse';
import ReOpenNegotiations from './components/ReOpenNegotiations';

class SecureNegotiationCenterPage extends Component {
    render() {
        return (
            <main className="container">

                <StatusBar/>

                <PropertyDetails/>

                <BuyerDetails/>

                <div className="row">

                    <div className="col-sm-6">

                        <BuyerOffer/>

                    </div>

                    <div className="col-sm-6">

                        <YourResponse/>

                    </div>

                </div>

                <ReOpenNegotiations/>

            </main>
        );
    }
}

export default SecureNegotiationCenterPage;