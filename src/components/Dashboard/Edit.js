import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../config/firestore'

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing, getEmployees }) => {
  const id = selectedEmployee.id;

  const [stid, setstid] = useState(selectedEmployee.stid);
  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [birthDate, setbirthDate] = useState(selectedEmployee.birthDate);
  const [address, setaddress] = useState(selectedEmployee.address);
  const [password, setpassword] = useState(selectedEmployee.password);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!stid || !firstName || !lastName || !birthDate || !address || !password) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      stid,
      firstName,
      lastName,
      birthDate,
      address,
      password,
    };

    // TODO: Update document
    await setDoc(doc(db, "Student", id), {
      ...employee
    });

    setEmployees(employees);
    setIsEditing(false);
    getEmployees();

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Student</h1>
        <label htmlFor="stid">Student ID</label>
        <input
          id="stid"
          type="text"
          name="stid"
          value={stid}
          onChange={e => setstid(e.target.value)}
        />
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <label htmlFor="birthDate">BirthDate</label>
        <input
          id="birthDate"
          type="date"
          name="birthDate"
          value={birthDate}
          onChange={e => setbirthDate(e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={e => setaddress(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          name="password"
          value={password}
          onChange={e => setpassword(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
