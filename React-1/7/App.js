import React, { useState } from 'react';

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button  id="a" onClick={handleOpenModal}>Open Modal</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>This is the modal message.</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
