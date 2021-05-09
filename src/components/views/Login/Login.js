import React from 'react';
import classes from './Login.module.scss';
import PropTypes from 'prop-types';

const Login = props => {
  return (
    <div className={classes.component}>
      <h2>Login view</h2>
    </div>
  );
};

Login.propTypes = {
  children: PropTypes.any,
};

export default Login;
