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
                    <div className="row">
                        <div className="col-sm-8">
                            <Body className="reopen-negotiations__negotiate-text typography--purple"
                                  text={this.state.negotiateText}/>
                        </div>
                        <div className="col-sm-4 reopen-negotiations__negotiate">
                            <Button className="btn btn--purple"
                                    text="negotiate for me"/>
                        </div>
                    </div>
                </div>

                <div className="clearfix">
                    <Title className="typography--purple typography--bold layout--l-s-g"
                           text="Enter an offer you would be willing to accept:"/>

                    <Body className="reopen-negotiations__currency typography--gray-dark layout--inline"
                          text="£"/>

                    <InputText className="reopen-negotiations__input-offer layout--inline"/>

                    <Button className="reopen-negotiations__submit-btn btn btn--blue"
                            text="submit offer"/>
                </div>

                <div className="layout--l-s-g">
                    <Button className="reopen-negotiations__add-comments btn btn--purple"
                            text="add comments"/>
                </div>

            </section>
        );
    }
}

export default ReOpenNegotiations;