/**
 * Created by Amir on 9/5/17.
 */

import React, { Component } from 'react';
import Status from '../../../components/common/typography/Body'

class StatusBar extends Component {

    constructor(props) {
        super(props);
        // data should come from API call
        // Hard code here temporary
        this.state = {
            statusText: 'Test Status'
        };
    }

    render() {
        return (
            <section className="status-bar">

                <span className="status-bar__label">
                    Status:
                </span>

                <Status className="status-bar__status typography--copy-xl typography--x-light"
                        text={this.state.statusText}/>

            </section>
        );
    }
}

export default StatusBar;