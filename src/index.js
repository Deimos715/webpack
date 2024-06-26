import React from "react"
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from "./components/App";

const app = <App />

const root = document.getElementById("root");
createRoot(root).render(app);