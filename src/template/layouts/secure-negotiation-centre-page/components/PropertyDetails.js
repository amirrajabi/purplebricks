/**
 * Created by Amir on 9/5/17.
 */

import React, {Component} from 'react';
import Header from '../../../components/global/BoxHeader';
import Title from '../../../components/common/typography/Header-3';
import Copy from '../../../components/common/typography/Body';
import Image from '../../../components/common/assets/Image';
import Button from '../../../components/common/button/TextButton';
import PropertyImageURL from '../../../../assets/images/property.jpg';

class PropertyDetails extends Component {

    constructor(props) {
        super(props);
        // data should come from API call
        // Hard code here temporary
        this.state = {
            headerText: 'The property',
            propertyText: 'Eddington House, 16 Wigginton Road,Tamworth, B79 8PB'
        };
    }

    render() {
        return (
            <section className="property-details">

                <Header className="typography--purple"
                        text={this.state.headerText}/>

                <div className="row">
                    <div className="col-sm-8 col-xs-12">

                        <Image url={PropertyImageURL}/>

                        <Title className="property-details__property-title typography--purple"
                               text={this.state.propertyText}/>

                    </div>
                    <div className="property-details__price col-sm-4 col-xs-12">

                        <Copy className="typography--gray-dark typography--copy-md typography--x-light"
                              text="Asking Price:"/>

                        <Copy className="typography--purple typography--copy-lg"
                              text="£189,950"/>

                        <Button className="btn btn--gray"
                                text="view extras included"/>

                    </div>
                </div>

            </section>
        );
    }
}

export default PropertyDetails;