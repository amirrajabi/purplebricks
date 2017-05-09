/**
 * Created by Amir on 8/5/17.
 */
import React from 'react';
import Image from '../common/assets/Image';
import Header1 from '../common/typography/Header-1';
import Logo from '../../../assets/images/logo.jpg';

const NavBar = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <div className="row">
                        <div className="col-sm-6">

                            <Image url={Logo}
                                   alt="Brand Logo"/>

                        </div>
                        <div className="col-sm-6">

                            <Header1 className="navbar-right typography--purple"
                                     text="Secure negotiation centre"/>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;