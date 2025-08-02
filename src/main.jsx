
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from "./Auth0ProviderWithNavigate"; // import your new file

const Root = () => (
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <App />
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);

