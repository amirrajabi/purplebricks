/**
 * Created by Amir on 9/5/17.
 */

import React, {Component} from 'react';
import Header from '../../../components/global/BoxHeader';
import Body from '../../../components/common/typography/Body';
import Button from '../../../components/common/button/LinkButton';

class BuyerDetails extends Component {

    constructor(props) {
        super(props);
        // data should come from API call
        // Hard code here temporary
        this.state = {
            headerText: 'Buyer’s details',
            buyerDetails: {
                name: 'Mr David Shepherd',
                buyingPosition: 'Property to sell - 20 weeks on the market',
                financialPosition: 'Mortgage required - approved',
                timescale: 'Would like to move in 10 weeks - no chain'
            }
        };
    }

    render() {
        return (
            <section className="buyer-details box--large box--gray">

                <Header className="typography--purple"
                        text={this.state.headerText}/>



                <ul>
                    <li>
                        <Body className="typography--purple layout--inline buyer-datails--label-width" text="Name:"/>
                        <Body className="typography--purple layout--inline" text={this.state.buyerDetails.name}/>
                    </li>
                    <li>
                        <Body className="typography--purple layout--inline buyer-datails--label-width"
                              text="Buying position:"/>
                        <Body className="typography--purple layout--inline" text="Buying position:"/>
                    </li>
                    <li>
                        <Body className="typography--purple layout--inline buyer-datails--label-width"
                              text="Financial position:"/>
                        <Body className="typography--purple layout--inline" text="Financial position:"/>
                    </li>
                    <li>
                        <Body className="typography--purple layout--inline buyer-datails--label-width"
                              text="Timescale:"/>
                        <Body className="typography--purple layout--inline" text="Timescale:"/>
                    </li>
                </ul>

            </section>
        );
    }
}

export default BuyerDetails;