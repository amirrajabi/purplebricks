/**
 * Created by Amir on 9/5/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Image = ({className, url, alt}) => {
    return (
        <img className={className}
             alt={alt}
             src={url}/>
    );
};

Image.propTypes = {
    className: PropTypes.string,
    url: PropTypes.string.isRequired,
    alt: PropTypes.string
};

export default Image;