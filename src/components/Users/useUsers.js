import { useEffect, useState, useCallback } from 'react';
import {useHistory} from 'react-router-dom';

const useUsers = ({ token, setToken }) => {
    const [users, setUsers] = useState([]);
    let controller = new AbortController();
    const baseURL = 'https://emphasoft-test-assignment.herokuapp.com/';
    const history = useHistory();

    useEffect(() => {
  
      const getUsers = async (token) => {
        try {
          const response = await fetch(baseURL + 'api/v1/users/', {
              method: 'GET',
              signal: controller.signal,
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
        controller.abort();
      };
    }, [controller, token]);

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
      controlLogout
    };
  
};

export default useUsers;