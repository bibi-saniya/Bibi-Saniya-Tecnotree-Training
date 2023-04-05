import React, { useState } from 'react';


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form fields
    const errors = {};
    if (name.trim() === '') {
      errors.name = 'Name is required';
    }
    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (message.trim() === '') {
      errors.message = 'Message is required';
    }
    setErrors(errors);

    // If no errors, clear the form details
    if (Object.keys(errors).length === 0) {
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        {errors.name && <span>{errors.name}</span>}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
        {errors.email && <span>{errors.email}</span>}

        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={handleMessageChange}></textarea>
        {errors.message && <span>{errors.message}</span>}

        <button id="a" type="submit">Submit</button><br/>
       
        <button  id="b" type="submit">Exit</button>
      </form>
    </div>
  );
}

export default App;
