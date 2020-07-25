import React from 'react';
import { userLogout } from '../redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Logout({ logout }) {
    
    logout();

    return (
        <Redirect to="/" />
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(userLogout());
        }
    }
}

export default connect(null, mapDispatchToProps)(Logout);