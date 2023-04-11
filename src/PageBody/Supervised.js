import React from "react";
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react';

function Supervised(){
    const { authStatus } = useAuthenticator(context => [context.authStatus]);
    return(
<>
      {authStatus !== 'authenticated' ? 
        <div>
            <p>Place Non Auth stuff Here</p>
        </div> : 
        <div>
             <p>Place Auth stuff here</p>   
        </div>
        
        }
    </>
    );
}

export default Supervised;