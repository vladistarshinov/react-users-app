import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

const useAuthForm = (validate, { setToken }) => {
    const [values, setValues] = useState({ username: "test_super", password: "Nf<U4f<rDbtDxAPn" });
    const [errors, setErrors] = useState({});
    let controller = new AbortController();
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

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
          const response = await fetch('https://emphasoft-test-assignment.herokuapp.com/api-token-auth/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            signal: controller.signal,
            body: JSON.stringify({
              username: values.username,
              password: values.password
            })
          });

          if (response.ok) {
            let json = await response.json();
            setToken(json.token);
            history.push('users');
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

         useEffect(() => {
          return () => {
            controller.abort()
          }
        }, []); 


    return {
        controlChange,
        controlSubmit,
        values,
        errors,
        isLoading
    };
};

export default useAuthForm;