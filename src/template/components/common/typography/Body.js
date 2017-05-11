/**
 * Created by Amir on 9/5/17.
 */

import React, {PropTypes} from 'react';

const Body = ({className, text}) => {
    return (
        <p className={className}>
            {text}
        </p>
    );
};

Body.propTypes = {
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Body;