import React from 'react';
import classes from './Kitchen.module.scss';
import PropTypes from 'prop-types';

const Kitchen = props => {
  return (
    <div className={classes.component}>
      <h2>Kitchen view</h2>
    </div>
  );
};

Kitchen.propTypes = {
  children: PropTypes.any,
};

export default Kitchen;
