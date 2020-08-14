import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import UsersList from './UsersList';
import FilterSearch from './FilterSearch';
import Pagination from './Pagination';

import useUsers from './useUsers';
import isEmpty from '../../plugins/isEmpty';

const Users = ({ token, setToken }) => {
 const { users, filteredUsers, onSearch, submitSort, currentListOfUsers, usersPerPage, paginate } = useUsers({ token, setToken });
  console.log(usersPerPage);
  return token ? (
    <Fragment>
      <FilterSearch onSearch={onSearch} />
      { isEmpty(users) ? (
        <p>Пользователей нет в системе. Добавьте пользователей</p>
      ) : isEmpty(filteredUsers) && filteredUsers ? (
        <p>Пользователей с таким логином не найдено!</p>
      ) : (
        <Fragment>
          <UsersList 
            users={filteredUsers ? filteredUsers : currentListOfUsers} 
            submitSort={submitSort} 
            setToken={setToken} 
          />
          <Pagination usersPerPage={usersPerPage} totalListOfUsers={users.length} paginate={paginate} />
        </Fragment>
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