import { useState } from "react";
import { foundEmailInDatabaseSchema } from "../../logic/validate/validate";
import TextError from "../../layoutcomponent/TextError";
import { useTranslation } from "react-i18next";
import axios from "../../logic/config/axios";
import { useNavigate } from "react-router-dom";

const validateEmail = (input, t) => {
  const { error } = foundEmailInDatabaseSchema.validate(input, {
    abortEarly: false,
  });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = t(message);
      return acc;
    }, {});
    return result;
  } else {
    return {};
  }
};

export default function VevifyEmailForm() {
  const { t } = useTranslation();
  const [inputEmail, setInputEmail] = useState({ email: "" });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInputEmail({ ...inputEmail, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const result = validateEmail(inputEmail, t);

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
        setError({ email: t("VevifyEmailFormText1") });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError({ email: t("VevifyEmailFormText2") });
      } else {
        setError({ email: t("VevifyEmailFormText3") });
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
          {t("VevifyEmail1")}
        </h2>
        <p className="tw-text-sm tw-text-center tw-mb-6 tw-text-gray-500">
          {t("VevifyEmail2")}
        </p>
        <div className="tw-mb-6">
          <input
            className="tw-w-full tw-py-2 tw-pl-4 tw-text-lg tw-font-mono tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-400"
            placeholder={t("VevifyEmailText3")}
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
          {t("VevifyEmailText4")}
        </button>
      </div>
    </form>
  );
}
