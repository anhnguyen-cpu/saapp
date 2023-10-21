import React, { useState } from "react";
import Swal from "sweetalert2";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firestore";

const Activity = ({ employees, setEmployees, setIsAdding, getEmployees ,handleHomePage}) => {
  const [stid, setstid] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    if (
      !stid ||
      !firstName ||
      !lastName ||
      !birthDate ||
      !address ||
      !password
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const newEmployee = {
      stid,
      firstName,
      lastName,
      birthDate,
      address,
      password,
    };

    employees.push(newEmployee);

    // TODO: Add doc to DB
    try {
      await addDoc(collection(db, "Student"), {
        ...newEmployee,
      });
    } catch (error) {
      console.log(error);
    }

    setEmployees(employees);
    setIsAdding(false);
    getEmployees();

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Activity</h1>
        <label htmlFor="stid">ID Student</label>
        <input
          id="stid"
          type="text"
          name="stid"
          value={stid}
          onChange={(e) => setstid(e.target.value)}
        />
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="birthDate">BirthDate</label>
        <input
          id="birthDate"
          type="date"
          name="birthDate"
          value={birthDate}
          onChange={(e) => setbirthDate(e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={handleHomePage}
          />
        </div>
      </form>
    </div>
  );
};

export default Activity;
