/**
 * Created by Amir on 8/5/17.
 */

/*
 * Import packages, components and assets
 * */
import React from 'react'
import Image from '../common/assets/Image';
import Title from '../common/typography/Header-1';
import Logo from '../../../assets/images/logo.jpg';

const Header = () => {
    return (
        <header className="header header-default">
            <div className="container">
                <div className="header-container">
                    <div className="row">

                        <div className="header-logo col-sm-6">

                            <Image className=""
                                   url={Logo}
                                   alt="Brand Logo"/>

                        </div>

                        <div className="col-sm-6">

                            <Title className="header-title typography--purple"
                                    text="Secure negotiation centre"/>

                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;