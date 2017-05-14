/**
 * Created by Amir on 9/5/17.
 */

import React, {Component} from 'react';
import {Collapse} from 'react-bootstrap';

import Header from '../../../components/global/BoxHeader';
import Body from '../../../components/common/typography/Body';

class BuyerDetails extends Component {

    constructor(props) {
        super(props);
        // data should come from API call
        // Hard code here temporary
        this.state = {
            open: true,
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
                <div>

                    <button className="buyer-details__collapse-btn"
                            onClick={ () => this.setState({open: !this.state.open})}>
                        {!this.state.open ? 'show' : 'hide'}
                        <i className={!this.state.open ? 'icon-down-open' : 'icon-up-open'}></i>
                    </button>

                    <Collapse in={this.state.open}>
                        <ul>
                            <li className="buyer-details--item">
                                <Body
                                    className="buyer-details__label typography--purple layout--inline buyer-details--label-width"
                                    text="Name:"/>
                                <Body className="buyer-details__info typography--black-light layout--inline"
                                      text={this.state.buyerDetails.name}/>
                            </li>
                            <li className="buyer-details--item">
                                <Body
                                    className="buyer-details__label typography--purple layout--inline buyer-details--label-width"
                                    text="Buying position:"/>
                                <Body className="buyer-details__info typography--black-light layout--inline"
                                      text={this.state.buyerDetails.buyingPosition}/>
                            </li>
                            <li className="buyer-details--item">
                                <Body
                                    className="buyer-details__label typography--purple layout--inline buyer-details--label-width"
                                    text="Financial position:"/>
                                <Body className="buyer-details__info typography--black-light layout--inline"
                                      text={this.state.buyerDetails.financialPosition}/>
                            </li>
                            <li className="buyer-details--item">
                                <Body
                                    className="buyer-details__label typography--purple layout--inline buyer-details--label-width"
                                    text="Timescale:"/>
                                <Body className="buyer-details__info typography--black-light layout--inline"
                                      text={this.state.buyerDetails.timescale}/>
                            </li>
                        </ul>
                    </Collapse>

                </div>
            </section>
        );
    }
}

export default BuyerDetails;