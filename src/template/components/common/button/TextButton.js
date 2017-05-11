/**
 * Created by Amir on 9/5/17.
 */

import React, {PropTypes} from 'react';

const TextButton = ({className, text}) => {
    return (
        <button type="button" className={className}>
            {text}
        </button>
    );
};

TextButton.propTypes = {
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default TextButton;