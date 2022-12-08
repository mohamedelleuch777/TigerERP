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
    <section class="container">
        <h2 class="title">Register</h2>
        <div class="input-field">
            <h3 class="label">Frist Name</h3>
            <div class="input-container">
                <input type="text" name="first-name" placeholder="Type your first name" />
                <i class="bi-person"></i>
            </div>
        </div>
        
        <div class="input-field">
            <h3 class="label">Last Name</h3>
            <div class="input-container">
                <input type="text" name="last-name" placeholder="Type your last name" />
                <i class="bi-person"></i>
            </div>
        </div>

        <div class="input-field">
            <h3 class="label">Username</h3>
            <div class="input-container">
                <input type="text" name="username" placeholder="Type your username" />
                <i class="bi bi-envelope-at"></i>
            </div>
        </div>

        <div class="input-field">
            <h3 class="label">Email</h3>
            <div class="input-container">
                <input type="email" placeholder="Type your email" />
                <i class="bi bi-envelope-at"></i>
            </div>
        </div>

        <div class="input-field">
            <h3 class="label">Password</h3>
            <div class="input-container">
                <input type="password" placeholder="Type your password" />
                <i class="bi-lock"></i>
            </div>
        </div>

        <div class="input-field">
            <h3 class="label">Confirmation</h3>
            <div class="input-container">
                <input type="password" placeholder="Type your password confirmation" />
                <i class="bi-lock"></i>
            </div>
        </div>

        <div class="submit">
            <button id="btn-refister">Register</button>
        </div>
        <p id="error-field"></p>
    </section>
  );
}
