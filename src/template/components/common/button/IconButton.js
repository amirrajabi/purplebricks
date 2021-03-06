/**
 * Created by Amir on 9/5/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({className, text}) => {
    return (
        <button tonClick={ () => this.setState({open: !this.state.open})}
                ype="button"
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