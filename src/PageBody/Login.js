import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function Admin() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <h1>Hey {user.username} you are already signed in</h1>
          <h3>You are authenticated</h3>
          <button onClick={signOut}>signOut</button>
        </div>
      )}
    </Authenticator>
  );
}

export default Admin;
