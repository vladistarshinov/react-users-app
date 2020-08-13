import React, { Fragment } from 'react';
import validate from '../../plugins/validate';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import useAuthForm from './useAuthForm';
/* import M from 'materialize-css'; */

const AuthForm = ({ token, setToken }) => {
    const { controlChange, controlSubmit, values, errors, isLoading } = useAuthForm(validate, { setToken });

    return token ? (
        <Fragment>
            <span>You are already authorized</span>
            <span>
                <Link to='/users'>Users List</Link>
            </span>
        </Fragment>
    ) : (
        <Fragment>
        <div className="row">
            <div className="col">
                <form action="" onSubmit={controlSubmit} noValidate>
                    <h3>Аутентификация</h3>
                    <div className="input-field">
                        <input id="username" name="username" type="username" className={classNames('validate', {'inputError': errors.username})} value={values.username} onChange={controlChange} />
                        <label htmlFor="username">Username</label>
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div className="input-field">
                        <input id="password" name="password" type="password" className={classNames('validate', {'inputError': errors.password})} value={values.password}  onChange={controlChange}/>
                        <label htmlFor="password">Password</label>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <button type="submit">{isLoading ? 'Входим...' : 'Вход'}</button>
                </form>
            </div>
            </div>
        </Fragment>
    )
};

export default AuthForm;