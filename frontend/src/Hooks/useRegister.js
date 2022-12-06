import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const register = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:5000/cms/auth', {
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({email, password, role: "admin"})
        });
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

    return { register, isLoading, error }
}

