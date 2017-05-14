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

class YourResponse extends Component {

    constructor(props) {
        super(props);
        // data should come from API call
        // Hard code here temporary
        this.state = {
            headerText: 'Your response',
            propertyText: 'Propert infoPropert infoPropert info',
            date: '24/10/2013',
            time: '20:17'
        };
    }

    render() {
        return (
            <section className="your-response box--large box--red">

                <Header className="typography--red"
                        text={this.state.headerText}/>

                <Body className="your-response__description typography--red"
                      text="You have withdrawn your acceptance of the offer"/>
                
                <Button className="btn btn--gray your-response__view-btn layout--inline"
                        text="view comments"/>

                <Body className="buyer-offer__date layout--inline typography--purple"
                      text={`Date: ${this.state.date}`} />

                <Body className="buyer-offer__date layout--inline typography--purple"
                      text={`Time: ${this.state.time}`}/>

            </section>
        );
    }
}

export default YourResponse;