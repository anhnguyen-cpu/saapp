import React from 'react';

import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated, setIsQRCode }) => {
  return (
    <header>
      <h1>CHAOPRAYA UNIVERSITY - Student Attendance Application</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px', }}>
        <button style={{ marginRight: '10px'}} onClick={() => setIsAdding(true)}>Add Student</button>
        <button style={{ marginRight: '10px'}} onClick={() => setIsQRCode(true)}>Add QR Code</button>
        <button onClick={() => setIsAdding(true)}>Show Data Record</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;
