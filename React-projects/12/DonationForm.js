import React, { useState, useRef } from 'react';
import './DonationForm.css';

function DonationForm() {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Process donation with Stripe API
    // ...
    // Reset form values
    formRef.current.reset();
    setAmount('');
    setName('');
    setEmail('');
  };

  return (
    <div className="DonationForm">
      <h2>Make a Donation</h2>
      <form class="b"ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount (in USD)</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Donate
        </button>
      </form>
    </div>
  );
}

export default DonationForm;
