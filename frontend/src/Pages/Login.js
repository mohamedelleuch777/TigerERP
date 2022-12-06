import { useState, useEffect } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useLogin } from "../Hooks/useLogin";
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email,password);
  }

  useEffect(()=>{
      if(user) {
          window.location.pathname = '/';
      }
  },[user]);

  return (
     !user && (
      <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="input-container">
          <label>Email:</label>
          <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </div>
        <button disabled={isLoading}>Login</button>
        {error && <div className="error">{error}</div>}
      </form>
     )
  );
}
