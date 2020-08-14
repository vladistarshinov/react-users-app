import React, { Fragment } from 'react';

import useUsers from './useUsers';


const Users = ({ users, token, setToken, submitSort }) => {
  const { controlLogout } = useUsers({ token, setToken });
  console.log('render');
  return (
    <Fragment>
      <button onClick={controlLogout}>Выход</button>
      <table>
        <thead>
          <tr>
            <th onClick={submitSort}>ID</th>
            <th>Логин</th>
            <th>Фамилия</th>
            <th>Имя</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.last_name}</td>
              <td>{user.first_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Users;