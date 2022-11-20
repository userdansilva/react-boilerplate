import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export { App };
