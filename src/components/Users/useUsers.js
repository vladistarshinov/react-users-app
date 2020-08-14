import { useEffect, useState, useCallback } from 'react';
import {useHistory} from 'react-router-dom';

import _ from 'lodash';

const useUsers = ({ token, setToken }) => {
    const [users, setUsers] = useState([]);
    const [sortType, setSortType] = useState('asc'); 
    const [filteredData, setFilteredData] = useState();
    let controller = new AbortController();
    const baseURL = 'https://emphasoft-test-assignment.herokuapp.com/';
    const history = useHistory();

    /*   const onSort = useCallback(
    (field) => {
      setSortType(sortType === 'asc' ? 'desc' : 'asc');
      setUsers(orderBy([...users], field, sortType));
    },
    [sortType, users]
  ); */

    const submitSort = () => {
      onSort('id');
    };

    const onSort = async (sortField) => {
      console.log('onSort');
      await setSortType(sortType === 'asc' ? 'desc' : 'asc');
      await setUsers(_.orderBy([...users], sortField, sortType));
    };
  
  const onSearch = (val) => {
    setFilteredData(getFilteredData(val));
  };

    const getFilteredData = useCallback(
      (val) => {
        if (val) {
          return users.find(u => u['username'].toLowerCase().trim().includes(val.toLowerCase().trim()));
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
              /* signal: controller.signal, */
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
        /* controller.abort(); */
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
      filteredData,
      controlLogout,
      submitSort,
      /* onSort, */
      onSearch
    };
  
};

export default useUsers;