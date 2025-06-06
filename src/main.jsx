import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContextProvider from "./logic/context/AuthContext.jsx";
import SocketProvider from "./logic/context/SocketContext.jsx";

// ✅ เพิ่มบรรทัดนี้เข้าไป
import "./logic/utils/i18n";

createRoot(document.getElementById("root")).render(
  <SocketProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </SocketProvider>
);
