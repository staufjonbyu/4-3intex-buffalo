import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth, Authenticator, AmplifySignOut } from 'aws-amplify';

function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [users, setUsers] = useState([]);
  
  // useEffect(() => {
  //   async function getUsers() {
  //     try {
  //       const session = await Auth.currentSession();
  //       const token = session.getAccessToken().getJwtToken();
  //       const apiName = 'your-api-name'; // Replace with your API name
  //       const path = '/users';
  //       const headers = {
  //         Authorization: token
  //       };
  //       const userData = await API.get(apiName, path, { headers });
  //       setUsers(userData);
  //     } catch (error) {
  //       console.log(error);
  //       setErrorMessage(error.message);
  //     }
  //   }
  //   getUsers();
  // }, []);
  


  async function handleCreateUser(event) {
    event.preventDefault();

    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      setErrorMessage('');
      setUsername('');
      setPassword('');
      setEmail('');
      alert('User created successfully!');
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <div>
      <h1>Create a new user</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleCreateUser}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create User</button>
      </form>
      {/* <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} ({user.email})</li>
        ))}
      </ul>
    </div> */}
    </div>
  );
}

export default withAuthenticator(Admin);