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
            propertyText: 'Eddington House, 16 Wigginton Road, Tamworth, B79 8PB',
            price: '£189,950'

        };
    }

    render() {
        return (
            <section className="property-details box--large box--purple">

                <Header className="typography--purple"
                        text={this.state.headerText}/>

                <div className="row">

                    <div className="col-sm-8">

                        <Image className="property-details__image layout--inline"
                               url={PropertyImageURL}
                               alt={this.state.propertyText}/>

                        <Title className="property-details__address typography--purple layout--inline"
                               text={this.state.propertyText}/>

                    </div>

                    <div className="property-details__info col-sm-4">

                        <Copy className="typography--gray-dark typography--copy-md typography--x-light"
                              text="Asking rice:"/>

                        <Title className="property-details__price typography--purple layout--full-width"
                              text={this.state.price}/>

                        <Button className="btn btn--gray"
                                text="view extras included"/>

                    </div>
                </div>

            </section>
        );
    }
}

export default PropertyDetails;