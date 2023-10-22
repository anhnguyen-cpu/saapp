import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import Header from "./Header";
import Table from "./Table";
import Add from "./Add";
import Edit from "./Edit";

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firestore";
import Activity from "./Activity";
import DataRecord from "./DataRecord";
import Detail from "./Detail";

const Dashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isActivity, setIsActivity] = useState(null);
  const [isRecordData, setIsRecordData] = useState(null);
  const [isDetails, setIsDetails] = useState(null);

  const getEmployees = async () => {
    const querySnapshot = await getDocs(collection(db, "Student"));
    const employees = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setEmployees(employees);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  };
const handleDetail =()=>{
  setIsDetails(true)
}
  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);

        // TODO delete document
        deleteDoc(doc(db, "Student", id));

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const employeesCopy = employees.filter(
          (employee) => employee.id !== id
        );
        setEmployees(employeesCopy);
      }
    });
  };
  const handleActivity = () => {
    setIsActivity(true);
  };
  const handleDataRecord = () => {
    setIsRecordData(true);
  };
  const handleHomePage = () => {
    setIsRecordData(false);
    setIsActivity(false);
    setIsEditing(false);
    setIsAdding(false);
    setIsDetails(false)
  };
  return (
    <div className="container">
      {!isAdding && !isEditing && !isActivity && !isRecordData && !isDetails &&(
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
            handleActivity={handleActivity}
            handleDataRecord={handleDataRecord}
          />
          <Table
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleDetail={handleDetail}
          />
        </>
      )}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
          getEmployees={getEmployees}
          handleHomePage={handleHomePage}
        />
      )}
      {isDetails &&(
        <Detail handleHomePage={handleHomePage}/>
      )}
      {isActivity && (
        <Activity
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
          getEmployees={getEmployees}
          handleHomePage={handleHomePage}
        />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
          getEmployees={getEmployees}
          handleHomePage={handleHomePage}
        />
      )}
      {isRecordData && (
        <DataRecord
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
          getEmployees={getEmployees}
          handleHomePage={handleHomePage}
        />
      )}
    </div>
  );
};

export default Dashboard;
