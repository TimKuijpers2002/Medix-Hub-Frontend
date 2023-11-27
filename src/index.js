import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak('./resources/keycloak.json');

keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
  console.log(keycloak);
  console.log(authenticated);
  // console.log(getState().keycloakLogin);
  if (!authenticated) {
      window.location.reload();
  } else {
      console.info("Authenticated");
  }

  //React Render on authentication
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  //store authentication tokens in sessionStorage
  sessionStorage.setItem('authentication', keycloak.token);
  sessionStorage.setItem('refreshToken', keycloak.refreshToken);    

  //to regenerate token on expiry
  setTimeout(() => {
      keycloak.updateToken(70).success((refreshed) => {
          if (refreshed) {
              console.debug('Token refreshed' + refreshed);
          } else {
              console.warn('Token not refreshed, valid for '
                  + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
          }
      }).error(() => {
          console.error('Failed to refresh token');
      });


  }, 60000)

  keycloak.onAuthLogout = () => {
      console.log('onAuthLogout');
  };
});

reportWebVitals();