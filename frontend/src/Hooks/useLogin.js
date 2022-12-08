import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (username, password) => {
        setIsLoading(true);
        setError(null);
        let data = {
            username: username,
            password: password
        }
        const response = await fetch("http://localhost:5000/user", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        const jsonData = await response.json();

        if(!response.ok) {
            setIsLoading(false);
            setError(jsonData.error)
        }
        else {
            if(jsonData.success) {
                // saving the user to local storage
                localStorage.setItem('user', JSON.stringify({token:jsonData.token,data:jsonData.data}));

                // update the auth context
                dispatch({type: 'LOGIN', payload: jsonData})
            } else {
                setError(jsonData.message);
            }
            setIsLoading(false);
        }
    }

    return { login, isLoading, error }
}

