/**
 * Created by Amir on 9/5/17.
 */

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
            <div>

                <StatusBar/>

                <PropertyDetails/>

                <BuyerDetails/>

                <div className="row">

                    <div className="col-sm-6 col-xs-12">

                        <BuyerOffer/>

                    </div>

                    <div className="col-sm-6 col-xs-12">

                        <YourResponse/>

                    </div>

                </div>

                <ReOpenNegotiations/>

            </div>
        );
    }
}

export default SecureNegotiationCenterPage;