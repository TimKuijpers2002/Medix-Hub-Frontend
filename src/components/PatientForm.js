import React, { useState } from 'react';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surName: '',
    // Add other fields based on your patient data structure
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send the form data to the API endpoint
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Create New Patient</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Surname:
          <input type="text" name="surName" value={formData.surName} onChange={handleChange} />
        </label>
        {/* Add other form fields based on your patient data structure */}
        <button type="submit">Create Patient</button>
      </form>
    </div>
  );
};

export default PatientForm;
