import { useState } from 'react';
import {useHistory} from 'react-router-dom';

const useAuthForm = (validate, { setToken }) => {
    const [values, setValues] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const baseURL = 'https://emphasoft-test-assignment.herokuapp.com/';
    const APItoken = 'api-token-auth/';

    const controlChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values, [name]: value
        })
    };

    const controlSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
          const response = await fetch(baseURL + APItoken, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
              username: values.username,
              password: values.password
            })
          });
          if (response.ok) {
            let json = await response.json();
            setToken(json.token);
            localStorage.setItem('token', json.token);
            history.push('/react-users-app/users');
          } else {
            setErrors(validate(values));
          }
          setIsLoading(false);
        }  catch(err) { 
          if (err.name === 'AbortError') {
            alert('При входе возникли проблемы. Попробуйте зайти позже!');
            setIsLoading(false);
          } else {
            throw err;
          }
        }     
    }

    return {
        controlChange,
        controlSubmit,
        values,
        errors,
        isLoading
    };
};

export default useAuthForm;