import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./App.scss";
import { BrowserRouter } from 'react-router-dom';

const el = document.getElementById("app");
const root = createRoot(el);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);