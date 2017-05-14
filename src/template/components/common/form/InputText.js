/**
 * Created by Amir on 9/5/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({className}) => {
    return (
        <input className={className}/>
    );
};

InputText.propTypes = {
    className: PropTypes.string
};

export default InputText;