import React, { Fragment } from 'react';

import ArrowUpDownIcon from 'mdi-react/ArrowUpDownIcon';

const Users = ({ users, submitSort }) => {

  return (
    <Fragment>
      <table class="table table-hover">
        <thead>
          <tr>
            <th className="text-center cursor-pointer" onClick={submitSort}># <ArrowUpDownIcon /> </th>
            <th className="text-center">Логин</th>
            <th className="text-center">Фамилия</th>
            <th className="text-center">Имя</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="text-center">{user.id}</td>
              <td className="text-center">{user.username}</td>
              <td className="text-center">{user.last_name}</td>
              <td className="text-center">{user.first_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Users;