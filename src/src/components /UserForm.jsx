// src/UserForm.js
import React, { useState } from 'react';
import './UserForm.css'; 

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="form-container">
      <h2>Форма користувача</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ім'я:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Вік:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Надіслати</button>
      </form>

      {submittedData && (
        <div className="result">
          <h3>Введені дані:</h3>
          <ul>
            <li><strong>Ім’я:</strong> {submittedData.name}</li>
            <li><strong>Email:</strong> {submittedData.email}</li>
            <li><strong>Вік:</strong> {submittedData.age}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserForm;
