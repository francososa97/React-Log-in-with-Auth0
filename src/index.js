import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-tr8cvexn.auth0.com"
      clientId="MthWNC1kKhXaVEff8Kwxozl1TxwvUTbE"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
