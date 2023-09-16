import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./components/context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
// document.oncontextmenu = () => {
//   return false;
// };
// document.onkeydown = (e) => {
//   if (e.key === "F12") {
//     return false;
//   }
//   if (e.ctrlKey && e.key === "u") {
//     return false;
//   }
//   if (e.c && e.key === "u") {
//     return false;
//   }
//   if (e.ctrlKey && e.key === "c") {
//     return false;
//   }
//   if (e.ctrlKey && e.key === "v") {
//     return false;
//   }
// };
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
