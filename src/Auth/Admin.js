import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import awsconfig from "../aws-exports";
import axios from "axios";
import { useContext } from "react";


function Admin({ switchToEditUserTab }) {
  // const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");
  const [Role, setRole] = useState("");
  
  

  const userUrl = "https://de8jo1lugqs3e.cloudfront.net/api/User";

   function handleEditClick() {
    console.log("Edit button clicked");
    switchToEditUserTab();
  }

  function myConfirm(message) {
    const confirmBox = document.createElement('div');
    confirmBox.innerHTML = `
      <div>
        <div>${message}</div>
        <button id="confirmYes">Yes</button>
        <button id="confirmNo">No</button>
      </div>
    `;
    confirmBox.style.position = 'fixed';
    confirmBox.style.top = '50%';
    confirmBox.style.left = '50%';
    confirmBox.style.transform = 'translate(-50%, -50%)';
    confirmBox.style.background = 'white';
    confirmBox.style.border = '1px solid black';
    confirmBox.style.padding = '20px';
    confirmBox.style.zIndex = '9999';
  
    const confirmYesButton = confirmBox.querySelector('#confirmYes');
    const confirmNoButton = confirmBox.querySelector('#confirmNo');
  
    return new Promise((resolve, reject) => {
      confirmYesButton.onclick = () => {
        confirmBox.remove();
        resolve(true);
      };
      confirmNoButton.onclick = () => {
        confirmBox.remove();
        resolve(false);
      };
      document.body.appendChild(confirmBox);
    });
  }
  


  async function deleteUser(email) {
    
    const confirmDelete = await myConfirm(`Are you sure you want to delete the user with email ${email}?`);
    if (!confirmDelete) {
      return;
    } else {
      axios
        .delete(`${userUrl}/${email}`)
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        })
        .catch((err) => {
          console.error(err);
        });

    }
  
  }

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(userUrl);
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.log("Error listing users", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.email}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.role}</td>
              <td>
                <div className="row">
                  <div className="col-6 justify-content-center align-items-center">

                      <button onClick={handleEditClick} class="btn btn-primary">Edit</button>

                  </div>
                  <div className="col-6 justify-content-center align-items-center">
                    <button
                      onClick={() => deleteUser(user.email)}
                      class="btn btn-primary"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
