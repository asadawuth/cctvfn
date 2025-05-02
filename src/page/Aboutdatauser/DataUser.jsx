import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import DataUserForm from "../../layoutcomponent/foraboutdatauser/DataUserForm";
import { useTranslation } from "react-i18next";

import { useAuth } from "../../logic/hook/user-auth";
export default function DataUser() {
  const { t } = useTranslation();
  const { updataProfile, setAuthUser, authUser } = useAuth();
  return (
    <>
      <HeaderMainMessage text={t("dataUser")} />
      <DataUserForm
        authUser={authUser}
        updataProfile={updataProfile}
        setAuthUser={setAuthUser}
      />
    </>
  );
}
