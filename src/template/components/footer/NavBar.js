/**
 * Created by Amir on 9/5/17.
 */
import React from 'react';
import Link from '../common/button/LinkButton';

const NavBar = () => {
    return (
        <nav className="pull-left">

            <ul className="list-inline layout--list-reset">
                <li className="nav-item">
                    <Link className="btn btn--link layout--right-border-white typography--white"
                          url="http://"
                          text="contact us"/>
                </li>
                <li className="nav-item">
                    <Link className="btn btn--link layout--right-border-white typography--white"
                          url="http://"
                          text="faq"/>
                </li>
                <li className="nav-item">
                    <Link className="btn btn--link layout--right-border-white typography--white"
                          url="http://"
                          text="join the team"/>
                </li>
                <li className="nav-item">
                    <Link className="btn btn--link layout--right-border-white typography--white"
                          url="http://"
                          text="about us"/>
                </li>
                <li className="nav-item">
                    <Link className="btn btn--link typography--white"
                          url="http://"
                          text="live help"/>
                </li>
            </ul>

        </nav>
    );
};

export default NavBar;