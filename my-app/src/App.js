import React, { useState } from 'react';

export default function Form(props) {
  const [submitted, setSubmitted] = useState(false);
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });

  // event handler that controls form’s submission
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    alert(`Submitting Email & Password ${inputs}`);
    console.log(inputs);
  };

  // handler that changes the input element’s value
  const handleEmailInputChange = e => {
    // e.persists();
    setInputs(inputs => ({
      ...inputs,
      email: e.target.value,
    }));
  };

  // handler that changes the input element’s value
  const handlePasswordInputChange = e => {
    // e.persists();
    setInputs(inputs => ({
      ...inputs,
      password: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type='text'
          placeholder='Email'
          keyboardType='email-address'
          autoCapitalize='none'
          value={inputs.email}
          onChange={handleEmailInputChange}
          required
        />
        <input
          placeholder={'Inputs'}
          value={inputs.password}
          onChange={handlePasswordInputChange}
          secureTextEntry
          type='password' // secureTextEntry
          required
        />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}
