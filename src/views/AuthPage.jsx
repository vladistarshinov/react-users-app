import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { BDiv } from 'bootstrap-4-react';

import AuthForm from '../components/AuthForm';

const AuthPage = ({ token, setToken }) => {
    console.log('render1');
    return token ? (
        <Fragment>
            <h5 className="text-center">Вы уже авторизованы!</h5>
            <BDiv className="text-center mt-5 mb-5">
                <Link 
                    to='/react-users-app/users' 
                    className="home__btn home__btn-back"
                >К списку пользователей</Link>
            </BDiv>  
        </Fragment>
    ) : (
        <Fragment>
            <AuthForm setToken={setToken} />
        </Fragment>
    )
};

export default AuthPage;