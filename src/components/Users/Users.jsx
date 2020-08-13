import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useUsers from './useUsers';
import UsersList from './UsersList';

const Users = ({ token, setToken }) => {
 const { users, controlLogout } = useUsers({ token, setToken });
  return token ? (
    <Fragment>
      <button onClick={controlLogout}>fdsfd</button>
      <UsersList users={ users } />
    </Fragment>
  ) : (
    <Fragment>
        <p>Вы не авторизованы!</p>
        <p>
            <Link to='/'>Sign In</Link>
        </p>
    </Fragment>
  );
};

export default Users;