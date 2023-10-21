import React from 'react';

const Table = ({ employees, handleEdit, handleDelete, handleDetail }) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th>Address</th>
            <th>Password</th>
            <th colSpan={3} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{employee.stid}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.birthDate}</td>
                <td>{employee.address}</td>
                <td>{employee.password} </td>
                <td className="text-center">
                  <button
                    onClick={() => handleDetail(employee.id)}
                    className="button muted-button"
                  >
                    Detail
                  </button>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Student</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
