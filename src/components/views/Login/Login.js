import React from 'react';
import styles from './Login.module.scss';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Login = () => (
  <Paper className={styles.component}>
    <Avatar className={styles.avatar}>
      <PersonIcon className={styles.icon}/>
    </Avatar>
    <Typography variant="h5" component="h5">
     User Log In
    </Typography>
    <form className={styles.form} noValidate>
      <TextField
        variant="filled"
        margin="normal"
        required
        fullWidth
        id="login"
        label="Login"
        name="login"
        autoComplete="login"
        autoFocus
      />
      <TextField
        variant="filled"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="secondary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        color="secondary"
        component={Link} to={`${process.env.PUBLIC_URL}/`}>
       Login now
      </Button>
    </form>
  </Paper>
);


export default Login;
