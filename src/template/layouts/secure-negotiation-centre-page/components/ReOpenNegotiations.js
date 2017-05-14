/**
 * Created by Amir on 9/5/17.
 */

import React, {Component} from 'react';
import Header from '../../../components/global/BoxHeader';
import Body from '../../../components/common/typography/Body';
import Button from '../../../components/common/button/TextButton';
import Input from 'react-number-format';

class ReOpenNegotiations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            negotiateText: 'Would you like your Expert, Robert White, to negotiate on your behalf? It’s completely free!',
            offerValue: {
                price: ''
            },
            errorMessage: '',

        };

        this.updateInputValue = this.updateInputValue.bind(this);
        this.submitOffer = this.submitOffer.bind(this);
    }

    submitOffer(event) {
        event.preventDefault();
        if (this.state.offerValue.price !== '') {
            console.log(`Offer is: ${JSON.stringify(this.state.offerValue)}`);
            this.setState({errorMessage: ''});
        } else {
            this.setState({errorMessage: 'Please fill in this field.'});
        }
    }

    updateInputValue(offer) {
        offer.preventDefault();
        this.setState({offerValue: {price: offer.target.value}});

        if (!offer.target.value) {
            this.setState({errorMessage: 'Your offer must be a number.'});
        } else {
            this.setState({errorMessage: ''});
        }
    }

    render() {
        return (
            <section className="reopen-negotiations box--large box--purple">

                <Header className="typography--purple"
                        text="Re-open negotiations"/>

                <div className="box--small box--gray">

                    <div className="reopen-negotiations__text-container layout--inline">

                        <Body className="reopen-negotiations__text typography--purple"
                              text={this.state.negotiateText}/>

                    </div>

                    <Button className="btn btn--purple reopen-negotiations__btn layout--inline"
                            text="negotiate for me"/>

                </div>

                <label className="reopen-negotiations__title-submit typography--h3 typography--purple typography--bold"
                       htmlFor="inputOffer">
                    Enter an offer you would be willing to accept:
                </label>

                <form onSubmit={this.submitOffer} noValidate>

                    <div className="reopen-negotiations__input-submit layout--inline">

                        <Body className="reopen-negotiations__currency typography--gray-dark layout--inline"
                              text="£"/>

                        <Input className="reopen-negotiations__input-offer layout--inline"
                               id="inputOffer"
                               type="number"
                               thousandSeparator={true}
                               value={this.state.offerValue.price}
                               onChange={this.updateInputValue}
                               maxLength={15}
                               required
                               aria-required="true"/>

                    </div>

                    <input className="reopen-negotiations__submit-btn btn btn--blue layout--inline"
                           type="submit"
                           value="submit offer"/>
                </form>

                <span className="reopen-negotiations__error-message">
                    {!this.state.offerValue.price !== '' ? this.state.errorMessage : ''}
                </span>

                <div>

                    <Button className="reopen-negotiations__add-comments btn btn--purple"
                            text="add comments"/>

                </div>

            </section>
        );
    }
}

export default ReOpenNegotiations;