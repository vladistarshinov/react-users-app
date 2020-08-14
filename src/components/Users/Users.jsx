import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useUsers from './useUsers';
import UsersList from './UsersList';
import FilterSearch from './FilterSearch';

const Users = ({ token, setToken }) => {
 const { users, filteredData, onSearch, submitSort } = useUsers({ token, setToken });
  return token ? (
    <Fragment>
      <FilterSearch onSearch={onSearch} />
      <UsersList submitSort={submitSort} users={filteredData ? filteredData : users} setToken={setToken} />
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