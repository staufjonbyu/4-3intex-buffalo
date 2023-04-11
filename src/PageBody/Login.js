import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function Admin() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <h1>Welcome {user.attributes.email}</h1>
          <h3>You are authenticated</h3>
          <button>Go to Burial</button>
        </div>
      )}
    </Authenticator>
  );
}

export default Admin;
