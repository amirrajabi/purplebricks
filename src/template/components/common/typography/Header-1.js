/**
 * Created by Amir on 9/5/17.
 */

import React, {PropTypes} from 'react';

const Header1 = ({className, text}) => {
    return (
        <h1 className={className}>
            {text}
        </h1>
    );
};

Header1.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default Header1;