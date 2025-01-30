import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContextProvider from "./logic/context/AuthContext.jsx";
import SocketProvider from "./logic/context/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  <SocketProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </SocketProvider>
);
