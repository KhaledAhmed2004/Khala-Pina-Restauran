import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="bg-slate-50 dark:bg-[#252836]">
        <RouterProvider router={Routes} />
        <Toaster />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
