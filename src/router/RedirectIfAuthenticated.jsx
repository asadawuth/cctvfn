import { useAuth } from "../logic/hook/user-auth";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  if (authUser) {
    return <Navigate to="/dardboardallvaule" />;
  }
  return children;
}
