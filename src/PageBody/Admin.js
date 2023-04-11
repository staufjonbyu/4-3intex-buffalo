import React from "react";
import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from "aws-amplify";
// import { withAuthenticator } from '@aws-amplify/ui-react';

function Admin() {
    if (!Auth) {
        return <div>Please sign in</div>;
      } else {
  return (
    <Authenticator>
        here is your stuff
    </Authenticator>
  );
}
}
export default Admin;

