import Router from "./router/Router";
import { useAuth } from "../src/logic/hook/user-auth";
import Loading from "../src/layoutcomponent/Loading";
export default function App() {
  const { loading } = useAuth();

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Router />
    </>
  );
}
