import { useState } from "react";
import { useRegister } from "../Hooks/useRegister";
import './Register.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const { register, error, isLoading } = useRegister();


  const handleSubmit = async (e) => {
    e.preventDefault();

    // later check if password and confirmation are same or not
    await register(email, password)
  }

  return (
    <form className="register" onSubmit={handleSubmit}>
      <h3>Register</h3>
      <div className="input-container">
        <label>Email:</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      </div>
      <div className="input-container">
        <label>Password:</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
      </div>
      <div className="input-container">
        <label>Confirmation:</label>
        <input type="password" onChange={(e)=>setConfirmation(e.target.value)} value={confirmation}/>
      </div>
      <button disabled={isLoading}>Register</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
