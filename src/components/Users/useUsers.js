import { useEffect, useState } from 'react';

const useUsers = ({ token }) => {
    const [users, setUsers] = useState([]);
    let controller = new AbortController();

    useEffect(() => {
  
      if (token) {
        try {
          const response = await fetch('https://emphasoft-test-assignment.herokuapp.com/api/v1/users/', {
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
      }
      
      return () => {
        controller.abort();
      };
    }, [controller, token]);

    return {
        users
    };
  
};

export default useUsers;