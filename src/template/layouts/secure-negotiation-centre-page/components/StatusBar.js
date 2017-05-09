/**
 * Created by Amir on 9/5/17.
 */

import React, { Component } from 'react';
import Label from '../../../components/common/typography/Header-2'

class StatusBar extends Component {
    render() {
        return (
            <section className="status-bar">
                <Label text="Status:"/>
            </section>
        );
    }
}

export default StatusBar;