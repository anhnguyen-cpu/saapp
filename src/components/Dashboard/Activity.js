import React, { useState } from "react";
const Activity = ({ handleHomePage }) => {
  const [activities, setActivities] = useState([
    { id: 1, name: "Activity 1", detail: "Details for Activity 1" },
    { id: 2, name: "Activity 2", detail: "Details for Activity 2" },
    { id: 3, name: "Activity 3", detail: "Details for Activity 3" },
  ]);

  const [showEdit, setShowEdit] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleEdit = () => {
    setShowEdit(true);
  };

 const  handleCreateActivity = () => {};
  const handleManageActivity = () => {
    setShowEdit(false);
  };
  return (
    <>
      <div className="small-container">
        {!showEdit && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Detail</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id}>
                  <td>{activity.id}</td>
                  <td>{activity.name}</td>
                  <td>{activity.detail}</td>
                  <td>
                    <button onClick={handleEdit}>Edit</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div style={{display:'flex',gap:4}} className="">
          <div className="p-2">
            <button onClick={handleHomePage}>HomePage</button>
          </div>
          {!showEdit && (
            <div className="p-2">
              <button onClick={handleCreateActivity}>Create Activity</button>
            </div>
          )}
          <div className="p-2">
            {showEdit && (
              <button onClick={handleManageActivity}>Manage Activity</button>
            )}
          </div>
        </div>
      </div>

      {showEdit && <span>test</span>}
    </>
  );
};

export default Activity;
