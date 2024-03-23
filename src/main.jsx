import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Auth0Provider
        domain="dev-zzs5k63jmwrqzh31.us.auth0.com"
        clientId="WOez2L7biQMhRcisE9qMa3taKyP58eop"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>
);
