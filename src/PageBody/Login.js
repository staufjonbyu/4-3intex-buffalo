import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from 'aws-amplify';


function Admin() {
  return (
    <Authenticator slot="sign-in" usernameAlias="email" hideSignUp>
      {({ signOut, user }) => (
        <div>
          <h1>Welcome {user.username}</h1>
          <h3>You are authenticated</h3>
          <a className="button" href='/burial'>Go to Burial</a>

        </div>
      )}
    </Authenticator>
  );
}

export default Admin;
