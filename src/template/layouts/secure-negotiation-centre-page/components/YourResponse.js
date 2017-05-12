/**
 * Created by Amir on 9/5/17.
 */


import React, {Component} from 'react';
import Header from '../../../components/global/BoxHeader';
import Body from '../../../components/common/typography/Body';
import Button from '../../../components/common/button/TextButton';

class YourResponse extends Component {

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
            <section className="buyer-offer box--large box--red">

                <Header className="typography--red"
                        text={this.state.headerText}/>

                <Body className="typography--red typography--copy-lg"
                      text="You have withdrawn your acceptance of the offer"/>

                <Button className="layout--inline btn btn--gray"
                        text="view comments"/>

                <Body className="layout--inline typography--purple"
                      text="Date: 24/10/2013"/>

                <Body className="layout--inline typography--purple"
                      text="Time: 20.17"/>

            </section>
        );
    }
}

export default YourResponse;