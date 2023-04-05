import React, { useState } from 'react';
import DonationForm from './DonationForm';

const Header = () => {
  const [showForm, setShowForm] = useState(false);

  const handleDonateClick = () => {
    setShowForm(true);
  };

  return (
    <div class="c">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#" onClick={handleDonateClick}>Donate</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      {showForm && <DonationForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Header;
