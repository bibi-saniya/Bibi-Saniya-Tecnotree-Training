import React, { useState } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import DonationForm from './DonationForm';
import './DonationForm.css';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleDonateClick = () => {
    setShowForm(true);
  }

  return (
    <div className="App">
      <Header onDonateClick={handleDonateClick} />
      {showForm && <DonationForm />}
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
