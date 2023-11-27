import React, { useState, useEffect } from 'react';
import { getAllPatients } from '../services/apiService';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPatients();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>All Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{`${patient.name} ${patient.surName}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
