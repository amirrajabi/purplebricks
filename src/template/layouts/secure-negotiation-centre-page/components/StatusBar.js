/**
 * Created by Amir on 9/5/17.
 */

import React, { Component } from 'react';
import Status from '../../../components/common/typography/Header-1'

class StatusBar extends Component {

    constructor(props) {
        super(props);
        // data should come from API call
        // Hard code here temporary
        this.state = {
            statusText: 'Withdrawn'
        };
    }

    render() {
        return (
            <section className="status-bar">

                <Status className="status-bar__label layout--inline"
                        text="Status:"/>

                <Status className="status-bar__status layout--inline"
                        text={this.state.statusText}/>

            </section>
        );
    }
}

export default StatusBar;