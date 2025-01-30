import { useAuth } from "../logic/hook/user-auth";
import { Navigate } from "react-router-dom";

export default function Authenticated({ children }) {
  const { authUser } = useAuth();

  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
