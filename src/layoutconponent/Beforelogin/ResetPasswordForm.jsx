import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { resetPasswordSchema } from "../../logic/validate/validate";
import axios from "../../logic/config/axios";
import Model from "../../layoutconponent/Model";
import ResetPasswordwordSuccess from "../../layoutconponent/Model/ModalSuccess/ResetPasswordSuccess";
import TextError from "../TextError";

const validateResetPassword = (input) => {
  const { error } = resetPasswordSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});

    if (!input.confirmNewPassword && !result.confirmNewPassword) {
      result.confirmNewPassword = "กรุณากรอกยืนยันรหัสผ่านใหม่";
    }

    return result;
  }
};

export default function ResetPasswordForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openModel, setOpenModel] = useState(false);
  const otpData = location.state?.otpData;
  const logPathResetpassword = location.state?.logPathResetpassword;
  const [inputResetPassword, setInputResetPassword] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  const [error, setError] = useState({});

  useEffect(() => {
    if (!logPathResetpassword) {
      navigate("/verifyemail", { replace: true });
    }
  }, [logPathResetpassword, navigate]);

  const handleChangeInput = (e) => {
    setInputResetPassword({
      ...inputResetPassword,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const result = validateResetPassword(inputResetPassword);
    if (result) {
      setError(result);
      return;
    }

    try {
      const response = await axios.patch("/user/resetpassword", {
        id: otpData.id,
        newPassword: inputResetPassword.newPassword,
        confirmPassword: inputResetPassword.confirmNewPassword,
      });
      if (response.status === 200) {
        setOpenModel(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-bg-gray-100 sm:tw-py-4 md:tw-py-8 lg:tw-py-12">
      <form
        onSubmit={handleSubmitForm}
        className="tw-w-full sm:tw-w-2/3 md:tw-w-1/2 lg:tw-w-1/3 tw-p-6 lg:tw-p-8 tw-bg-white tw-rounded-lg tw-shadow-lg tw-border-0 sm:tw-border sm:tw-border-blue-500"
      >
        <div className="tw-mb-4">
          <input
            name="newPassword"
            onChange={handleChangeInput}
            type="password"
            placeholder="กรุณากรอกรหัสผ่านใหม่"
            className="tw-w-full tw-p-3 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-blue-400"
          />
          {error.newPassword && <TextError text={error.newPassword} />}
        </div>
        <div className="tw-mb-4">
          <input
            name="confirmNewPassword"
            onChange={handleChangeInput}
            type="password"
            placeholder="กรุณากรอกรหัสผ่านใหม่อีกครั้งเพื่อยืนยันรหัสผ่านใหม่"
            className="tw-w-full tw-p-3 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-blue-400"
          />
          {error.confirmNewPassword && (
            <TextError text={error.confirmNewPassword} />
          )}
        </div>
        <button
          type="submit"
          className="tw-w-full tw-bg-blue-500 tw-text-white tw-py-2 tw-px-4 tw-rounded-md hover:tw-bg-blue-600"
        >
          ยืนยันเปลี่ยนรหัสผ่าน
        </button>
      </form>
      <Model
        title="อัพเดทรหัสผ่านใหม่สำเสร็จ"
        open={openModel}
        onClose={() => setOpenModel(false)}
      >
        <ResetPasswordwordSuccess onClose={() => setOpenModel(false)} />
      </Model>
    </div>
  );
}
