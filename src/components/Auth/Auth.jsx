import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import AuthForm from './AuthForm';
/* import M from 'materialize-css'; */

const Auth = ({ token, setToken }) => {
    console.log('render1');
    return token ? (
        <Fragment>
            <span>Вы уже авторизованы</span>
            <span>
                <Link to='/users'>Users List</Link>
            </span>
        </Fragment>
    ) : (
        <Fragment>
            <AuthForm setToken={setToken} />
        </Fragment>
    )
};

export default Auth;