import React from 'react';
import classes from './Login.module.scss';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const Login = () => {
  return (
    <Container maxWidth="xs" className={classes.component}>
      <CssBaseline />
      <Typography component='h1' variant='h5'>
        Sign in
      </Typography>
      <TextField
        id="outlined-basic"
        label="Login"
        variant="outlined"
        autoComplete="name"
        required
        autoFocus
        margin='normal'
      />
      <TextField
        id="outlined-basic"
        label="Password" v
        variant="outlined"
        autoComplete="password"
        required
        autoFocus
        margin='normal'
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        href='/panel/'>
        Sign in
      </Button>
    </Container>
  );
};

export default Login;
