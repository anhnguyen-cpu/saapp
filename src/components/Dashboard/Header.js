import React from "react";

import Logout from "../Logout";

const Header = ({
  setIsAdding,
  setIsAuthenticated,
  setIsQRCode,
  handleActivity,
  handleDataRecord,
}) => {
  return (
    <header>
      <h1>CHAOPRAYA UNIVERSITY - Student Attendance Application</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => setIsAdding(true)}
        >
          Add Student
        </button>
        <button style={{ marginRight: "10px" }} onClick={handleActivity}>
          Add Activity
        </button>
        <button onClick={handleDataRecord}>Show Data Record</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;
