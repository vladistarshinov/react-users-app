import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { BDiv } from 'bootstrap-4-react';

import UsersList from './UsersList';
import FilterSearch from './FilterSearch';
import Pagination from './Pagination';

import useUsersElements from './useUsersElements';
import isEmpty from '../../plugins/isEmpty';

const Users = ({ token, setToken }) => {
 const { users, filteredUsers, onSearch, submitSort, currentListOfUsers, usersPerPage, paginate } = useUsersElements({ token, setToken });
  console.log(usersPerPage);
  return token ? (
    <Fragment>
      <FilterSearch onSearch={onSearch} setToken={setToken} />
      { isEmpty(users) ? (
        <h4 className="text-center">Загрузка...</h4>
      ) : isEmpty(filteredUsers) && filteredUsers ? (
        <h5 className="text-center">Пользователей с таким логином не найдено!</h5>
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
      <h5 className="text-center">Вы не авторизованы!</h5>
      <BDiv className="text-center mt-5">
        <Link to='/' className="home__btn home__btn-back">Назад</Link>
      </BDiv>  
    </Fragment>
  );
};

export default Users;