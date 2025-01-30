import { useState } from "react";
import { useAuth } from "../../logic/hook/user-auth";
import { changePasswordSchema } from "../../logic/validate/validate";
import Model from "../../layoutcomponent/Model";
import ChangePasswordSuccess from "../Model/ModalSuccess/ChangeEmailSuccess";
import TextError from "../../layoutcomponent/TextError";

const validateChangePassword = (input) => {
  const { error } = changePasswordSchema.validate(input, { abortEarly: false });
  const result = {};

  if (error) {
    error.details.forEach((el) => {
      const { message, path } = el;
      result[path[0]] = message;
    });
  }

  if (input.newPassword === "" && input.confirmNewPassword === "") {
    result.confirmNewPassword = "กรุณากรองยืนยันรหัสผ่าน";
  } else if (input.confirmNewPassword === "") {
    result.confirmNewPassword = "กรุณากรอกเพื่อยืนยันรหัสใหม่";
  }

  return result;
};

export default function ChangePasswordForm() {
  const [openModel, setOpenModel] = useState(false);
  const [inputPassword, setInputPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [error, setError] = useState({});
  const { changePassword } = useAuth();
  const handleChangeInput = (e) => {
    setInputPassword({
      ...inputPassword,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const result = validateChangePassword(inputPassword);
    if (Object.keys(result).length > 0) {
      setError(result);
      console.log("Validation errors:", result);
    } else {
      setError({});
      try {
        await changePassword(inputPassword);
        setOpenModel(true);
        setInputPassword({
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        });
      } catch (error) {
        console.log("Error changing password:", error);
        if (error.response && error.response.data.message) {
          if (error.response.status === 500) {
            setError({
              oldPassword: "รหัสผ่านเก่าไม่ถูกต้อง หรือมีปัญหาทางเซิร์ฟเวอร์",
            });
          } else {
            setError({
              oldPassword: "รหัสผ่านเก่าไม่ถูกต้อง หรือมีปัญหาทางเซิร์ฟเวอร์",
            });
          }
        } else {
          setError({ message: "เกิดข้อผิดพลาด กรุณาลองอีกครั้ง" });
          setError({
            confirmNewPassword: "ข้อมูลไม่ถูกต้อง",
          });
        }
      }
    }
  };
  return (
    <>
      <div className="tw-flex tw-justify-center tw-items-center tw-bg-gray-100 sm:tw-py-4 md:tw-py-8 lg:tw-py-12">
        <form
          onSubmit={handleSubmitForm}
          className="tw-w-full sm:tw-w-2/3 md:tw-w-1/2 lg:tw-w-1/3 tw-p-6 lg:tw-p-8 tw-bg-white tw-rounded-lg tw-shadow-lg tw-border-0 sm:tw-border sm:tw-border-blue-500"
        >
          <div className="tw-mb-4">
            <input
              name="oldPassword"
              type="password"
              placeholder="กรุณากรอกรหัสเก่า"
              value={inputPassword.oldPassword}
              onChange={handleChangeInput}
              className="tw-w-full tw-p-3 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-blue-400"
            />
            {error.oldPassword && <TextError text={error.oldPassword} />}
          </div>
          <div className="tw-mb-4">
            <input
              name="newPassword"
              type="password"
              placeholder="กรุณากรอกรหัสใหม่"
              className="tw-w-full tw-p-3 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-blue-400"
              value={inputPassword.newPassword}
              onChange={handleChangeInput}
            />
            {error.newPassword && <TextError text={error.newPassword} />}
          </div>
          <div className="tw-mb-4">
            <input
              name="confirmNewPassword"
              type="password"
              placeholder="กรุณากรอกเพื่อยันยันรหัสใหม่"
              className="tw-w-full tw-p-3 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-blue-400"
              value={inputPassword.confirmNewPassword}
              onChange={handleChangeInput}
            />
            {error.confirmNewPassword && (
              <TextError text={error.confirmNewPassword} />
            )}
          </div>
          <button className="tw-w-full tw-bg-blue-500 tw-text-white tw-py-2 tw-px-4 tw-rounded-md hover:tw-bg-blue-600">
            ยืนยันเปลี่ยนรหัสผ่าน
          </button>
          <a className="tw-block tw-text-center tw-text-slate-600 tw-text-sm tw-mt-4 hover:tw-text-blue-500 hover:tw-cursor-pointer">
            เปลี่ยนรหัสผ่าน ?
          </a>
        </form>
      </div>

      <Model
        title="เปลี่ยนรหัสผ่านสำเร็จ"
        open={openModel}
        onClose={() => setOpenModel(false)}
      >
        <ChangePasswordSuccess onClose={() => setOpenModel(false)} />
      </Model>
    </>
  );
}
