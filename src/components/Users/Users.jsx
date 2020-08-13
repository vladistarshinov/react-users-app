import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useUsers from './useUsers';
import UsersList from './UsersList';

const Users = ({ token }) => {
 const { users } = useUsers({ token });
  return token ? (
    <UsersList users={ users } />
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