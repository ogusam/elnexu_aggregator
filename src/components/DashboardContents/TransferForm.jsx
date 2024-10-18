// TransferForm.js

import React, { useState } from 'react';

const TransferForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    accountNumber: '',
    accountName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form submitted with data:', formData);
    // You can add API call or any further logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label><br/>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Account Number:</label><br/>
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Account Name:</label><br/>
        <input
          type="text"
          name="accountName"
          value={formData.accountName}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Transfer</button>
    </form>
  );
};

export default TransferForm;
