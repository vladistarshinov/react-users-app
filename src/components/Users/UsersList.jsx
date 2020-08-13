import React, { Fragment } from 'react';
import isEmpty from '../../plugins/isEmpty';

const Users = ({ users, setToken }) => {
  return !isEmpty(users) ? (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Логин</th>
            <th>Имя</th>
            <th>Фамилия</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  ) : (
    <p>Пользователей не обнаружено. Добавьте пользователей</p>
  );
};

export default Users;