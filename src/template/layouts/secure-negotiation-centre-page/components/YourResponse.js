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
            <section className="your-response box--large box--red">

                <Header className="typography--red"
                        text={this.state.headerText}/>

                <Body className="your-response__description typography--red"
                      text="You have withdrawn your acceptance of the offer"/>
                
                <Button className="btn btn--gray your-response__view-btn layout--inline"
                        text="view comments"/>

                <Body className="your-response__date layout--inline typography--purple"
                      text="Date: 24/10/2013"/>

                <Body className="your-response__date layout--inline typography--purple"
                      text="Time: 21.05"/>

            </section>
        );
    }
}

export default YourResponse;