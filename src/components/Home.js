import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Medix Hub</h1>
      <Link to="/patients">
        <button>View All Patients</button>
      </Link>
      <Link to="/patients/create">
        <button>Create New Patient</button>
      </Link>
    </div>
  );
};

export default Home;
