import React from 'react';
import PropTypes from 'prop-types';
import style from './HorizontalScrollContainer.module.css';

const HorizontalScrollContainer = ({ children }) => {
    return (
        <div className={style.scrollContainer}>
            {children}
        </div>
    );
};

HorizontalScrollContainer.propTypes = {
    children: PropTypes.node.isRequired
};

export default HorizontalScrollContainer;
