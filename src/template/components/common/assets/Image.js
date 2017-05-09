/**
 * Created by Amir on 9/5/17.
 */

import React, {PropTypes} from 'react';

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