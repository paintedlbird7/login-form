import React, { useState } from 'react';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // event handler that controls form’s submission
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type='text'
          placeholder='Email'
          keyboardType='email-address'
          autoCapitalize='none'
          value={email}
          onChange={e => 
            setEmail(e.target.value)}
          required
        />
        <input
          placeholder='Password'
          keyboardType='password'
          autoCapitalize='none'
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password' // secureTextEntry
          required
        />
      </label>
      <input type='submit' value='Submit' />
      <p>{email}</p>
      <p>{password}</p>
    </form>
  );
}
