import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { profile } from './Login'
import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

const clientId = "99565761776-86oc4v48e5kfk2sng5kj0duo673ao88r.apps.googleusercontent.com";

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
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    }
}));


export default function Profile() {
    const classes = useStyles();
    const onSuccess = () => {
        alert('Logout made successfully');
    };

    return (
        <div className={classes.root}>
            <p className={classes.font}> {profile.name} </p>
            <Avatar alt={profile.name} src={profile.imageUrl} className={classes.large} />
            <br></br>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                ></GoogleLogout>

        </div>
    );
}