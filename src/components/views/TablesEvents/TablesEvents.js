import React from 'react';
import classes from './TablesEvents.module.scss';
import PropTypes from 'prop-types';

const TablesEvents = props => {
  return (
    <div className={classes.component}>
      <h2>TablesEvents view</h2>
    </div>
  );
};

TablesEvents.propTypes = {
  children: PropTypes.any,
};

export default TablesEvents;
