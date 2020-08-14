import { useEffect, useState, useCallback } from 'react';
import {useHistory} from 'react-router-dom';

import _ from 'lodash';

const useUsers = ({ token, setToken }) => {
    const [users, setUsers] = useState([]);
    const [sortType, setSortType] = useState('asc'); 
    const [filteredUsers, setFilteredUsers] = useState(null);
    const baseURL = 'https://emphasoft-test-assignment.herokuapp.com/';
    const history = useHistory();

    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);

    const indexOfLastListOfUsers = currentPage * usersPerPage;
    const indexOfFirstListOfUsers = indexOfLastListOfUsers - usersPerPage;
    const currentListOfUsers = users.slice(indexOfFirstListOfUsers, indexOfLastListOfUsers);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const submitSort = () => {
      onSort('id');
    };

    const onSort = (sortField) => {
      console.log('onSort');
      setSortType(sortType === 'asc' ? 'desc' : 'asc');
      setUsers(_.orderBy([...users], sortField, sortType));
    };
  
  const onSearch = (val) => {
    setFilteredUsers(getFilteredUsers(val));
  };

    const getFilteredUsers = useCallback(
      (val) => {
        if (val) {
          return users.filter(u => u['username'].toLowerCase().trim().includes(val.toLowerCase().trim()));
        }
        return null;
      },
      [users]
    );
    
    
    useEffect(() => {
  
      const getUsers = async (token) => {
        try {
          const response = await fetch(baseURL + 'api/v1/users/', {
              method: 'GET',
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          );
  
          if (response.ok) {
            let json = await response.json();
            setUsers(json);
          }
        } catch (err) {
          console.error(err);
        }
      };
  
      if (token) {
        getUsers(token);
      }
      return () => {
      };
    }, [token]);

    const controlLogout = useCallback(
      () => {
        setToken(null);
        localStorage.clear();
        history.push('/');
      },
      [history, setToken]
    )

    return {
      users,
      filteredUsers,
      controlLogout,
      submitSort,
      onSearch,
      currentListOfUsers,
      usersPerPage,
      paginate
    };
  
};

export default useUsers;