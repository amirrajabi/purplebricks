/**
 * Created by Amir on 9/5/17.
 */

import React, {PropTypes} from 'react';

const InputText = ({className}) => {
    return (
        <input className={className}/>
    );
};

InputText.propTypes = {
    className: PropTypes.string
};

export default InputText;