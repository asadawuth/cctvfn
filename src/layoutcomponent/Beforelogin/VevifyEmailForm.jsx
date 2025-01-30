import { useState } from "react";
import { foundEmailInDatabaseSchema } from "../../logic/validate/validate";
import TextError from "../../layoutcomponent/TextError";

import axios from "../../logic/config/axios";
import { useNavigate } from "react-router-dom";

const validateEmail = (input) => {
  const { error } = foundEmailInDatabaseSchema.validate(input, {
    abortEarly: false,
  });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  } else {
    return {};
  }
};

export default function VevifyEmailForm() {
  const [inputEmail, setInputEmail] = useState({ email: "" });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInputEmail({ ...inputEmail, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const result = validateEmail(inputEmail);

    if (Object.keys(result).length > 0) {
      setError(result);
      return;
    } else {
      setError({});
    }

    try {
      const res = await axios.post("/user/verifyemail", inputEmail);
      if (res?.data) {
        navigate("/verifyotp", { state: { otpData: res.data } }); // ส่ง otpData ผ่าน state
      } else {
        setError({ email: "ไม่สามารถตรวจสอบอีเมล์นี้ได้" });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError({ email: "ไม่พบบัญชีอีเมล์นี้" });
      } else {
        setError({ email: "เกิดข้อผิดพลาดในการเชื่อมต่อ" });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="tw-flex tw-justify-center tw-bg-gray-100 sm:tw-py-4 md:tw-py-8 lg:tw-py-12"
    >
      <div className="tw-w-full sm:tw-w-2/3 md:tw-w-1/2 lg:tw-w-1/3 tw-p-6 lg:tw-p-8 tw-bg-white tw-rounded-lg tw-shadow-lg tw-border tw-border-gray-300">
        <h2 className="tw-text-2xl tw-font-semibold tw-text-center tw-mb-6 tw-text-gray-800">
          กรุณาระบุอีเมล์ของคุณ
        </h2>
        <p className="tw-text-sm tw-text-center tw-mb-6 tw-text-gray-500">
          เพื่อส่งคำขอ OTP ยืนยันสำหรับ Reset Password
        </p>
        <div className="tw-mb-6">
          <input
            className="tw-w-full tw-py-2 tw-pl-4 tw-text-lg tw-font-mono tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-400"
            placeholder="ระบุอีเมล์ของคุณ"
            name="email"
            type="text"
            onChange={handleChangeInput}
            value={inputEmail.email}
          />
        </div>
        {error.email && <TextError text={error.email} />}
        <button
          typeof="submit"
          className="tw-w-full tw-bg-blue-500 tw-text-white tw-font-semibold tw-py-3 tw-rounded-md hover:tw-bg-blue-600 focus:tw-ring-2 focus:tw-ring-blue-400"
        >
          ยืนยัน
        </button>
      </div>
    </form>
  );
}
