/**
 * Created by Amir on 8/5/17.
 */
import React, {PropTypes} from 'react';

const NavBar = ({logo, title}) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <div className="row">
                        <div className="col-sm-6">
                            <img alt="Brand" src={logo}/>
                        </div>
                        <div className="col-sm-6">
                            <h1 className="navbar-right typography--purple">{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

NavBar.propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default NavBar;