import React from "react";
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from "aws-amplify";
import { withAuthenticator } from '@aws-amplify/ui-react';


function AdminAuth()  {
    const { authStatus } = useAuthenticator(context => [context.authStatus]);
  
    // Use the value of authStatus to decide which page to render
   return (
      <>
        {authStatus === 'configuring'}
        {authStatus !== 'authenticated' ? 
        <div>
            <h4>please sign in</h4>
        </div> : 
        <div>
            <h3>Welcome to the admin portal</h3>

        </div>
        
        }
      </>
    );
  };
  
const Admin = () => {
  return (
    <Authenticator.Provider>
      <AdminAuth />
    </Authenticator.Provider>
  );
};

export default Admin;




