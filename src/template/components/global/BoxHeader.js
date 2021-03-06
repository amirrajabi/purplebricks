/**
 * Created by Amir on 10/5/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Title from '../common/typography/Header-1';

const BoxHeader = ({className, text}) => {
    return (
        <header className="box-header">
            <Title className={className}
                   text={text}/>
        </header>
    );
};

BoxHeader.propTypes = {
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default BoxHeader;