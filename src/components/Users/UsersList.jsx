import React, { Fragment } from 'react';
import isEmpty from '../../plugins/isEmpty';

const Users = ({ users }) => {
  return !isEmpty(users) ? (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <th>{user.username}</th>
              <th>{user.first_name}</th>
              <th>{user.last_name}</th>
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