import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from 'react-router-dom'

// const clientId = process.env.clientId;
const gapiId = "99565761776-86oc4v48e5kfk2sng5kj0duo673ao88r.apps.googleusercontent.com";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  font: {
    fontSize: 30,
    textAlign: 'center',
    padding: 15,
    color: 'gray'
  }
}));

var signedIn = false;
var profile = {
  email: '',
  name: '',
  imageUrl: ''
}


function Login() {
  const classes = useStyles();

  const onSuccess = (res) => {
    alert('successfully logged in');
    console.log('login success currentUser: ', res.profileObj);
    profile = {
      email: res.profileObj.email,
      name: res.profileObj.name,
      imageUrl: res.profileObj.imageUrl
    }
    signedIn = true;
    return <Redirect to='/'/>
  }

  const onFailure = (res) => {
    console.log('login failed res: ', res);
  }

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className={classes.root}>
      <GoogleLogin
        clientId={gapiId}
        buttonText="Sign in"
        width="400"
        onSuccess={onSuccess}
        onFailure={onFailure}
        // isSignedIn={true}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}


export { signedIn, Login, profile };