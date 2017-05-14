/**
 * Created by Amir on 9/5/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

const TextButton = ({className, text}) => {
    return (
        <button type="button"
                className={className}>
            {text}
        </button>
    );
};

TextButton.propTypes = {
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default TextButton;