/**
 * Created by Amir on 9/5/17.
 */

import React, {PropTypes} from 'react';

const LinkButton = ({className, text, url, target}) => {
    return (
        <a type="button"
           href={url}
           target={target}
           className={className}>
            {text}
        </a>
    );
};

LinkButton.propTypes = {
    className: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    target: PropTypes.string
};

export default LinkButton;