/**
 * Created by Amir on 9/5/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Header2 = ({className, text}) => {
    return (
        <h2 className={className}>
            {text}
        </h2>
    );
};

Header2.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default Header2;