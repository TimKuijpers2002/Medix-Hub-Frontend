import { getToken } from './authService';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`,
};

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const getAllPatients = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/patient`, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};

export const getPatientById = async (patientId) => {
  try {
    const response = await fetch(`${baseUrl}/api/patient/${patientId}`, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching patient with ID ${patientId}:`, error);
    throw error;
  }
};

export const createPatient = async (patientData) => {
  try {
    const response = await fetch(`${baseUrl}/api/patient`, {
      method: 'POST',
      headers,
      body: JSON.stringify(patientData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating patient:', error);
    throw error;
  }
};

export const updatePatient = async (patientId, patientData) => {
  try {
    const response = await fetch(`${baseUrl}/api/patient/${patientId}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(patientData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error updating patient with ID ${patientId}:`, error);
    throw error;
  }
};

export const deletePatient = async (patientId) => {
  try {
    const response = await fetch(`${baseUrl}/api/patient/${patientId}`, {
      method: 'DELETE',
      headers,
    });
    if (!response.ok) {
      throw new Error(`Failed to delete patient with ID ${patientId}`);
    }
  } catch (error) {
    console.error(`Error deleting patient with ID ${patientId}:`, error);
    throw error;
  }
};
