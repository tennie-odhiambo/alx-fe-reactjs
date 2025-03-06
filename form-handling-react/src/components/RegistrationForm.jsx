import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const trimmedUsername = formData.username.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPassword = formData.password.trim();

    if (!trimmedUsername || !trimmedEmail || !trimmedPassword) {
      alert('All fields are required!');
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    console.log('Form submitted:', { username: trimmedUsername, email: trimmedEmail, password: trimmedPassword });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit" disabled={!formData.username || !formData.email || !formData.password}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;