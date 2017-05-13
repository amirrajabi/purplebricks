/**
 * Created by Amir on 9/5/17.
 */

import React, {Component} from 'react';
import Link from '../common/button/LinkButton';

class Footer extends Component {

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
            <footer className="footer">
                <div className="container clearfix">
                    <nav className=" pull-left">

                        <ul className="list-inline layout--list-reset">
                            <li>
                                <Link
                                    className="btn btn--link layout--right-border-white layout--non-left-padding typography--white"
                                    url="http://"
                                    text="contact us"/>
                            </li>
                            <li>
                                <Link className="btn btn--link layout--right-border-white typography--white"
                                      url="http://"
                                      text="faq"/>
                            </li>
                            <li>
                                <Link className="btn btn--link layout--right-border-white typography--white"
                                      url="http://"
                                      text="join the team"/>
                            </li>
                            <li>
                                <Link className="btn btn--link layout--right-border-white typography--white"
                                      url="http://"
                                      text="about us"/>
                            </li>
                            <li>
                                <Link className="btn btn--link typography--white"
                                      url="http://"
                                      text="live help"/>
                            </li>
                        </ul>

                    </nav>
                    <ul className="list-inline layout--list-reset pull-right">
                        <li><i className="icon-twitter"><span className="sr-only"></span></i></li>
                        <li><i className="icon-facebook"><span className="sr-only"></span></i></li>
                        <li><i className="icon-youtube"><span className="sr-only"></span></i></li>
                        <li><i className="icon-pinterest"><span className="sr-only"></span></i></li>
                        <li><i className="icon-gplus"><span className="sr-only"></span></i></li>
                    </ul>
                </div>



            </footer>
        );
    }
}

export default Footer;
