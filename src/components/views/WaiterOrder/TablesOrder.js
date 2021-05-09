import React from 'react';
import classes from './WaiterOrder.module.scss';
import PropTypes from 'prop-types';

const WaiterOrder = props => {
  return (
    <div className={classes.component}>
      <h2>WaiterOrder view</h2>
    </div>
  );
};

WaiterOrder.propTypes = {
  children: PropTypes.any,
};

export default WaiterOrder;
