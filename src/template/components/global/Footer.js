/**
 * Created by Amir on 9/5/17.
 */

import React, {Component} from 'react';
import NavBar from '../footer/NavBar';
import Socials from '../footer/Socials';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container clearfix">

                    <NavBar/>

                    <Socials/>

                </div>
            </footer>
        );
    }
}

export default Footer;
