/**
 * Created by Amir on 9/5/17.
 */

import React, {Component} from 'react';
import Header from '../../../components/global/BoxHeader';
import Title from '../../../components/common/typography/Header-2';
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
            headerText: 'Test StatusTest StatusTest Status',
            propertyText: 'Propert infoPropert infoPropert info',
            headerClassName: 'typography--purple',
            propertyClassName: 'property-details__property-title typography--purple',
            askPriceClassName: 'typography--gray typography--copy-xs pull-right',
            priceClassName: 'typography--purple typography--copy-lg pull-right',
            buttonClassName: 'text-button text-button--gray typography--white'
        };
    }

    render() {
        return (
            <section className="property-details">

                <Header className={this.state.headerClassName}
                        text={this.state.headerText}/>

                <div className="row">
                    <div className="col-sm-8 col-xs-12">

                        <Image url={PropertyImageURL}/>

                        <Title className={this.state.propertyClassName}
                               text={this.state.propertyText}/>

                    </div>
                    <div className="col-sm-4 col-xs-12">

                        <Copy className={this.state.askPriceClassName}
                              text="Asking Price:"/>

                        <Copy className={this.state.priceClassName}
                              text="$ 1,833,200"/>

                        <Button className={this.state.buttonClassName}
                                text="do some things"/>

                    </div>
                </div>

            </section>
        );
    }
}

export default PropertyDetails;