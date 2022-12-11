import { useState } from "react";
import { useRegister } from "../Hooks/useRegister";
// import './Register.css';

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
    <section className="container">
        <h2 className="title">Register</h2>
        <div className="input-field">
            <h3 className="label">Frist Name</h3>
            <div className="input-container">
                <input type="text" name="first-name" placeholder="Type your first name" />
                <i className="bi-person"></i>
            </div>
        </div>
        
        <div className="input-field">
            <h3 className="label">Last Name</h3>
            <div className="input-container">
                <input type="text" name="last-name" placeholder="Type your last name" />
                <i className="bi-person"></i>
            </div>
        </div>

        <div className="input-field">
            <h3 className="label">Username</h3>
            <div className="input-container">
                <input type="text" name="username" placeholder="Type your username" />
                <i className="bi bi-envelope-at"></i>
            </div>
        </div>

        <div className="input-field">
            <h3 className="label">Email</h3>
            <div className="input-container">
                <input type="email" placeholder="Type your email" />
                <i className="bi bi-envelope-at"></i>
            </div>
        </div>

        <div className="input-field">
            <h3 className="label">Password</h3>
            <div className="input-container">
                <input type="password" placeholder="Type your password" />
                <i className="bi-lock"></i>
            </div>
        </div>

        <div className="input-field">
            <h3 className="label">Confirmation</h3>
            <div className="input-container">
                <input type="password" placeholder="Type your password confirmation" />
                <i className="bi-lock"></i>
            </div>
        </div>

        <div className="submit">
            <button id="btn-refister">Register</button>
        </div>
        <p id="error-field"></p>
    </section>
  );
}
