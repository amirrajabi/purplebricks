/**
 * Created by Amir on 9/5/17.
 */

/*
 * Import packages and components
 * */
import React, {Component} from 'react';
import Header from '../../../components/global/BoxHeader';
import Body from '../../../components/common/typography/Body';
import Button from '../../../components/common/button/TextButton';

class BuyerDetails extends Component {

    constructor(props) {
        super(props);
        // data should come from API call
        // Hard code here temporary
        this.state = {
            headerText: 'Buyer’s offer',
            propertyText: 'Propert infoPropert infoPropert info',
            price: '£179,000',
            date: '24/10/2013',
            time: '20:17'
        };
    }

    render() {
        return (
            <section className="buyer-offer box--large box--gray">

                <Header className="typography--purple"
                        text={this.state.headerText}/>
                
                <Body className="buyer-offer__price"
                      text={this.state.price}/>

                <Body className="buyer-offer__description"
                      text="Subject to offer qualification by Purplebricks"/>

                <Button className="btn btn--gray buyer-offer__view-btn layout--inline"
                        text="view comments"/>

                <Body className="buyer-offer__date layout--inline typography--purple"
                      text={`Date: ${this.state.date}`} />

                <Body className="buyer-offer__date layout--inline typography--purple"
                      text={`Time: ${this.state.time}`}/>

            </section>
        );
    }
}

export default BuyerDetails;