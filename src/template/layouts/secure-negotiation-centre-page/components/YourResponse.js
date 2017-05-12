/**
 * Created by Amir on 9/5/17.
 */

import React, {Component} from 'react';
import Header from '../../../components/global/BoxHeader';

class BuyerDetails extends Component {

    constructor(props) {
        super(props);
        // data should come from API call
        // Hard code here temporary
        this.state = {
            headerText: 'Your response',
            propertyText: 'Propert infoPropert infoPropert info'
        };
    }

    render() {
        return (
            <section className="property-details">

                <Header className="typography--purple"
                        text={this.state.headerText}/>

            </section>
        );
    }
}

export default BuyerDetails;