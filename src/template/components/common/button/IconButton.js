/**
 * Created by Amir on 9/5/17.
 */

import React, {PropTypes} from 'react';

const IconButton = ({className, text}) => {
    return (
        <button type="button"
                className={className}>
            {text}
        </button>
    );
};

IconButton.propTypes = {
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default IconButton;