import React, { useState } from 'react';

export default function Form(props){
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Submitting Email ${email}`);
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
          onChangeText={setEmail}
        />
        <input
          placeholder={'Password'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
};