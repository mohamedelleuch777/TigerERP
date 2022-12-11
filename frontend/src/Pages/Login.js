import { useState, useEffect } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useLogin } from "../Hooks/useLogin";
import Button from "../Components/button";
// import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();
  const { user } = useAuthContext();

  const btnLoginClicked = async (e) => {

    await login(username,password);
  }

  useEffect(()=>{
      if(user) {
          window.location.pathname = '/';
      }
  },[user]);

  return (
     !user && (
      // <form className="login" onSubmit={handleSubmit}>
      //   <h3>Login</h3>
      //   <div className="input-container">
      //     <label>Email:</label>
      //     <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      //   </div>
      //   <div className="input-container">
      //     <label>Password:</label>
      //     <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
      //   </div>
      //   <button disabled={isLoading}>Login</button>
      //   {error && <div className="error">{error}</div>}
      // </form>

      <div className="container">
          <h2 className="title">Login</h2>
          <div className="input-field">
              <h3 className="label">Username</h3>
              <div className="input-container">
                  <input type="text" name="username" placeholder="Type your username" onChange={(e)=>setUsername(e.target.value)} value={username} />
                  <i className="bi bi-envelope-at"></i>
              </div>
          </div>
          <div className="input-field">
              <h3 className="label">Password</h3>
              <div className="input-container">
                  <input type="password" placeholder="Type your password" onChange={(e)=>setPassword(e.target.value)} value={password} />
                  <i className="bi-lock"></i>
              </div>
          </div>
          <div className="submit">
              <Button 
                disabled={isLoading} id="btn-submit-login" 
                style={btnStyle} 
                label="Login" 
                icon="box-arrow-in-right" 
                onClick={btnLoginClicked} 
                type="primary" 
              />
          </div>
          {error && <p id="error-field">{error}</p>}
          <div className="link-area">
              <a href="/register">Register Instead</a>
              <a href="/reset">Forgot Password</a>
          </div>
      </div>
     )
  );
}



const btnStyle = {
  margin: "auto",
  height: "auto",
  width: "100%",
}