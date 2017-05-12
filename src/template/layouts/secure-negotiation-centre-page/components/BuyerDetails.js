/**
 * Created by Amir on 9/5/17.
 */

import React, {Component} from 'react';
import Header from '../../../components/global/BoxHeader';
import Body from '../../../components/common/typography/Body';

class BuyerDetails extends Component {

    constructor(props) {
        super(props);
        // data should come from API call
        // Hard code here temporary
        this.state = {
            headerText: 'Buyer’s details',
            buyerDetails: [
                'Mr David Shepherd',
                'Property to sell - 20 weeks on the market',
                'Mortgage required - approved',
                'Would like to move in 10 weeks - no chain']
        };
    }

    render() {
        return (
            <section className="buyer-details box--large box--gray">

                <Header className="typography--purple"
                        text={this.state.headerText}/>
                <div className="row">
                    <div className="col-xs-2">
                        <ul>
                            <li>
                                <Body className="typography--purple" text="Name:"/>
                            </li>
                            <li>
                                <Body className="typography--purple" text="Buying position:"/>
                            </li>
                            <li>
                                <Body className="typography--purple" text="Financial position:"/>
                            </li>
                            <li>
                                <Body className="typography--purple" text="Timescale:"/>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-10">
                        <ul>
                            {this.state.buyerDetails.map(function (index, key) {
                                return <li key={key}><Body className="typography--gray-dark" text={index}/></li>;
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default BuyerDetails;