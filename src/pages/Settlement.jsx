import React, { useState } from "react";


const Settlement = () => {
  const [formData, setFormData] = useState({
    bank: "",
    accountNumber: "",
    receiversAccount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      bank: "",
      accountNumber: "",
      receiversAccount: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form Submitted: ", formData);
  };

  return (
    <div className="settlement">
    <div className="settlement-form">
      <h2 style={{paddingTop: '40px', paddingBottom: '20px'}}>Set SettleBank Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{paddingRight:'50px'}}>Settle Bank:</label>
          <select
            name="bank"
            value={formData.bank}
            onChange={handleInputChange}
          >
            <option value="">Select Bank</option>
            <option value="Bank of America">Bank1</option>
            <option value="Chase">bank2</option>
            <option value="Wells Fargo">bank3</option>
          </select>
        </div>
        <div className="form-group">
          <label style={{paddingRight:'12px'}}>Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleInputChange}
            placeholder="Enter account number"
          />
        </div>
        <div className="form-group">
          <label style={{paddingRight:'2px'}}>Receiver's Account:</label>
          <input
            type="text"
            name="receiversAccount"
            value={formData.receiversAccount}
            onChange={handleInputChange}
            placeholder="Enter receiver's account"
          />
        </div>
        <div className="form-buttons">
          <button type="button" onClick={handleReset} className="resetButton">
            Reset
          </button>
          <button type="submit" className="saveBtn">Save</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Settlement;
