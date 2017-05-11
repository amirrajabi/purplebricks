/**
 * Created by Amir on 9/5/17.
 */

import React, {PropTypes} from 'react';

const Header3 = ({className, text}) => {
    return (
        <h3 className={className}>
            {text}
        </h3>
    );
};

Header3.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default Header3;