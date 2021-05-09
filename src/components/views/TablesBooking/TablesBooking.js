import React from 'react';
import classes from './TablesBooking.module.scss';
import PropTypes from 'prop-types';

const TablesBooking = props => {
  return (
    <div className={classes.component}>
      <h2>TablesBooking view</h2>
    </div>
  );
};

TablesBooking.propTypes = {
  children: PropTypes.any,
};

export default TablesBooking;
