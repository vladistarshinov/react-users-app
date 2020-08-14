import React, { Fragment } from 'react';
import isEmpty from '../../plugins/isEmpty';

import useUsers from './useUsers';


const Users = ({ users, token, setToken, submitSort }) => {
  const { controlLogout } = useUsers({ token, setToken });
  console.log('render');
  return !isEmpty(users) ? (
    <Fragment>
      <button onClick={controlLogout}>Выход</button>
      <table>
        <thead>
          <tr>
            <th onClick={submitSort}>ID</th>
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
    <Fragment>
      <p>Пользователей не обнаружено. Добавьте пользователей</p>
      {<button onClick={controlLogout}>fdsfd</button>}
    </Fragment>
  );
};

export default Users;