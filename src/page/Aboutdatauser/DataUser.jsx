import HeaderMainMessage from "../../layoutconponent/HeaderMainMessage";
import DataUserForm from "./../../layoutconponent/foraboutdatauser/DataUserForm";
import { useAuth } from "../../logic/hook/user-auth";
export default function DataUser() {
  const { updataProfile, setAuthUser, authUser } = useAuth();
  return (
    <>
      <HeaderMainMessage text={"หน้าข้อมูลUser"} />
      <DataUserForm
        authUser={authUser}
        updataProfile={updataProfile}
        setAuthUser={setAuthUser}
      />
    </>
  );
}
