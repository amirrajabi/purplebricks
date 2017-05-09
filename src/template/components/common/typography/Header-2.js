/**
 * Created by Amir on 9/5/17.
 */

import React, {PropTypes} from 'react';

const Header2 = ({text}) => {
    return (
        <h2 className="typography--h2">
            {text}
        </h2>
    );
};

Header2.propTypes = {
    text: PropTypes.string.isRequired
};

export default Header2;