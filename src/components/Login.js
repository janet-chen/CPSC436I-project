import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function Login() {
  const classes = useStyles();
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
        <div class="g-signin2" data-onsuccess="onSignIn">
        <meta name="google-signin-client_id" content='99565761776-86oc4v48e5kfk2sng5kj0duo673ao88r.apps.googleusercontent.com'/>
        </div>
    </div>
  );
}
