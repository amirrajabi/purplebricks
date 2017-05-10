/**
 * Created by Amir on 9/5/17.
 */

import React, {Component} from 'react';
import Body from '../../../components/common/typography/Body';
import Button from '../../../components/common/button/TextButton';
import InputText from '../../../components/common/form/InputText';

class ReOpenNegotiations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            negotiateClassName: 'typography--purple',
            negotiateText: 'Would you like your Expert, Robert White, to negotiate on your behalf? It’s completely free!',
        };
    }

    render() {
        return (
            <section className="reopen-negotiations box--large box--purple">

                <div className="box--small box--gray">
                    <div className="row">
                        <div className="col-sm-8">
                            <Body className={this.state.negotiateClassName}
                                  text={this.state.negotiateText}/>
                        </div>
                        <div className="col-sm-4 reopen-negotiations__negotiate">
                            <Button className="btn btn--purple"
                                    text="negotiate for me"/>
                        </div>
                    </div>
                </div>

                <Body className="typography--purple typography--bold layout--l-s-g"
                      text="Enter an offer you would be willing to accept:"/>

                <Body className="typography--gray-dark typography--regular typography--copy-lg layout--inline layout--auto-height"
                      text="£"/>

                <InputText className="reopen-negotiations__input-offer layout--inline"/>

                <Button className="reopen-negotiations__submit-btn btn btn--blue"
                        text="submit offer"/>

            </section>
        );
    }
}

export default ReOpenNegotiations;