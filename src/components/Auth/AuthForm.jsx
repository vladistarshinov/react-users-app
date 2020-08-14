import React, { Fragment } from 'react';
import validate from '../../plugins/validate';
import classNames from 'classnames';
import { BDiv } from 'bootstrap-4-react';
import CubeOutlineIcon from 'mdi-react/CubeOutlineIcon';

import useAuthForm from './useAuthForm';
/* import M from 'materialize-css'; */

const AuthForm = ({ token, setToken }) => {
    const { controlChange, 
            controlSubmit, 
            values, 
            errors, 
            isLoading } = useAuthForm(validate, { setToken });

    return (
        <Fragment>
            <BDiv 
                id="home" 
                display="flex" 
                justifyContent="around" 
                alignItems="center"
            >
                <section className="home">
                    <BDiv className="mt-3 text-center">
                        <CubeOutlineIcon color="yellow" size={72} />
                    </BDiv>
                    <form action="" onSubmit={controlSubmit} noValidate>
                        <h5 className="home__title text-center">Вход в систему</h5>
                        <BDiv 
                            className="input-field" 
                            w="100" 
                            display="flex" 
                            justifyContent="around" 
                            mt="5"
                        >
                            <label htmlFor="first_name">Username</label>
                            <input 
                                id="first_name" 
                                name="username" 
                                type="text" 
                                className={classNames('validate', {'inputError': errors.username})} 
                                value={values.username} onChange={controlChange} 
                            />
                        </BDiv>
                        <span>{errors.username && <p className="error">{errors.username}</p>}</span>
                        <BDiv 
                            className="input-field" 
                            w="100" 
                            display="flex" 
                            justifyContent="around" 
                            mt="4"
                        >
                            <label htmlFor="password">Password</label>
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                className={classNames('validate', {'inputError': errors.password})} 
                                value={values.password}  onChange={controlChange}
                            />
                        </BDiv>
                        <span>{errors.password && <p className="error">{errors.password}</p>}</span>
                        <BDiv w="100" display="flex" justifyContent="around">
                            <button 
                                className="home__btn home__btn-login" 
                                type="submit"
                            >{isLoading ? 'Входим...' : 'Вход'}</button>
                        </BDiv>
                    </form>
                </section>
            </BDiv>
        </Fragment>
    )
};

export default AuthForm;