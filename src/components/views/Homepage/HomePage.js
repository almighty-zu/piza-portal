import React from 'react';
import classes from './HomePage.module.scss';
import PropTypes from 'prop-types';

const HomePage = props => {
  return (
    <div className={classes.component}>
      <h2>Homepage view</h2>
    </div>
  );
};

HomePage.propTypes = {
  children: PropTypes.any,
};

export default HomePage;
