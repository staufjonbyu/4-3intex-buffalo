import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import awsconfig from "../aws-exports";
import axios from "axios";

function Admin() {
  // const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");
  const [Role, setRole] = useState("");

  const userUrl = "https://de8jo1lugqs3e.cloudfront.net/api/User";

  function deleteUser(email) {
    axios
      .delete(`${userUrl}/${email}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
        // perform any necessary UI updates
      })
      .catch((err) => {
        console.error(err);
      });
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
                <Link
                  to={`/create?email=${user.email}&firstname=${user.firstname}&lastname=${user.lastname}&role=${user.role}`}
                >
                  <button>Edit</button>
                </Link>
                <a> </a>

                <button onClick={() => deleteUser(user.email)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
