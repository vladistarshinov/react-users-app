import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import UsersList from './UsersList';
import FilterSearch from './FilterSearch';

import useUsers from './useUsers';
import isEmpty from '../../plugins/isEmpty';

const Users = ({ token, setToken }) => {
 const { users, filteredUsers, onSearch, submitSort } = useUsers({ token, setToken });
  return token ? (
    <Fragment>
      <FilterSearch onSearch={onSearch} />
      { isEmpty(users) ? (
        <p>Пользователей нет в системе. Добавьте пользователей</p>
      ) : isEmpty(filteredUsers) && filteredUsers ? (
        <p>Пользователей с таким логином не найдено!</p>
      ) : (
        <UsersList 
          users={filteredUsers ? filteredUsers : users} 
          submitSort={submitSort} 
          setToken={setToken} 
        />
      ) }
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