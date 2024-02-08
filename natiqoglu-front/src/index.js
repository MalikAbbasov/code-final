import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Preloader from "./components/Preloader";
import UserProvider from "./context/userContext/UserProvider";
import NewsProvider from "./context/newsContext/NewsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NewsProvider>
      <UserProvider>
        {/* <Preloader /> */}
        <App />
      </UserProvider>
    </NewsProvider>
  </React.StrictMode>
);
