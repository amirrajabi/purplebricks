/**
 * Created by Amir on 9/5/17.
 */

import React, {Component} from 'react';
import Header from '../../../components/global/BoxHeader';
import Body from '../../../components/common/typography/Body';
import Title from '../../../components/common/typography/Header-3';
import Button from '../../../components/common/button/TextButton';
import InputText from '../../../components/common/form/InputText';

class ReOpenNegotiations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            negotiateText: 'Would you like your Expert, Robert White, to negotiate on your behalf? It’s completely free!',
        };
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

                <Title className="reopen-negotiations__title-submit typography--purple typography--bold"
                       text="Enter an offer you would be willing to accept:"/>
                <div>
                    <div className="reopen-negotiations__input-submit layout--inline">
                        <Body className="reopen-negotiations__currency typography--gray-dark layout--inline"
                              text="£"/>

                        <InputText className="reopen-negotiations__input-offer layout--inline"/>
                    </div>

                    <Button className="reopen-negotiations__submit-btn btn btn--blue layout--inline"
                            text="submit offer"/>
                </div>

                <div className="">
                    <Button className="reopen-negotiations__add-comments btn btn--purple"
                            text="add comments"/>
                </div>

            </section>
        );
    }
}

export default ReOpenNegotiations;