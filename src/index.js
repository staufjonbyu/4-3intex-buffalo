import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Custom.css';
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react';
Amplify.configure(config, {
  Auth: {
    // other auth configurations
    signup: false
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
// const theme = {
//   name: 'byu-look-alike',
//   tokens: {
//     colors: {
//       background: {
//         primary: { value: '#658CBB'}
//       }
//     }
//   }
// }
root.render(
  <AmplifyProvider>
    <Authenticator.Provider>
      <App />
    </Authenticator.Provider>

  </AmplifyProvider>
  // <React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
