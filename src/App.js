"use client";

import { ErrorBoundary } from "react-error-boundary";
import React from "react";
import "./index.css";
import "./App.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route } from "react-router-dom";
import Error404 from "./Dev/Contexts/Error";
import AuthPage from "./Dev/Auth/AuthPage";
import Homepage from "./Dev/Homepage";
import Livepage from "./Dev/Livepage";

function App() {
  return (
    <ErrorBoundary fallback={Error404}>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="live" element={<Livepage />} />
          <Route path="userauth" element={<AuthPage />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;
