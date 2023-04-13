import {
  Authenticator,
  useAuthenticator,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { API, Auth } from "aws-amplify";
import React, { useState, useEffect } from "react";
import NewEntry from "./Admin/NewEntry";
import awsconfig from "./../aws-exports";

function Admin() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const usersData = await Auth.listUsers("us-east-1_0B3eMtrZ1");
        setUsers(usersData);
      } catch (error) {
        console.log("Error listing users", error);
      }
    }

    fetchUsers();
  }, []);
  // Use the value of authStatus to decide which page to render
  return (
    <>
      {authStatus === "configuring"}
      {authStatus !== "authenticated" ? (
        <div>
          <a href="/newentry" className="nav-link text-dark border">
            Home
          </a>
        </div>
      ) : (
        <Authenticator>
          <div>
            <h3>Welcome to the admin portal</h3>
          </div>
          <div>
            <h2>User List</h2>
            <ul>
              {users.map((user) => (
                <li key={user.Username}>
                  <p>Username: {user.Username}</p>
                  <p>
                    Email:{" "}
                    {
                      user.Attributes.find((attr) => attr.Name === "email")
                        .Value
                    }
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Authenticator>
      )}
    </>
  );
}

export default withAuthenticator(Admin);
