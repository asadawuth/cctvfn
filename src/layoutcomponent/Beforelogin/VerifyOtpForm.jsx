import OtpInput from "react-otp-input";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtpSchema } from "../../logic/validate/validate";
import axios from "../../logic/config/axios";
import TextError from "../TextError";
import { useTranslation } from "react-i18next";

const checkOtpSchema = (input, t) => {
  if (input.otp.length < 4) {
    return { otp: t("VerifyOtpText") };
  }
  const { error } = verifyOtpSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = t(message);
      return acc;
    }, {});
    return result;
  }
  return null;
};

export default function VerifyOtpForm() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const otpData = location.state?.otpData;
  const [otpConfirm, setOtpConfirm] = useState("");
  const [messageError, setMessageError] = useState("");
  const [actionTextSend, setActionTextSend] = useState(false);
  const [logPathResetpassword, setLogPathResetpassword] = useState(false);

  useEffect(() => {
    if (!otpData) {
      navigate("/verifyemail", { replace: true });
    }
  }, [otpData, navigate]);

  const handleClear = () => {
    setOtpConfirm("");
    setMessageError("");
  };

  const handleCreateOtp = async () => {
    setActionTextSend(true);

    try {
      const response = await axios.post("/user/createotp", {
        email: otpData.email,
      });
    } catch (error) {
      console.error("Error sending OTP:", error);
      setMessageError(t("VerifyOtpFormText1"));
    }
  };

  const handleConfirmOtp = async () => {
    const validationResult = checkOtpSchema({ otp: otpConfirm }, t);
    if (validationResult) {
      setMessageError(validationResult.otp);
      return;
    }
    setMessageError("");

    try {
      const res = await axios.post("/user/verifyotp", {
        id: otpData.id,
        otp: otpConfirm,
      });
      setLogPathResetpassword(true);
      navigate("/resetpassword", {
        state: { otpData: res.data.user, logPathResetpassword: true },
      });
    } catch (error) {
      console.error("Error confirming OTP:", error);
      setMessageError(t("VerifyOtpFormText2"));
    }
  };

  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-bg-gray-100 sm:tw-py-4 md:tw-py-8 lg:tw-py-12">
      <form className="tw-w-full sm:tw-w-2/3 md:tw-w-1/2 lg:tw-w-1/3 tw-p-6 lg:tw-p-8 tw-bg-white tw-rounded-lg tw-shadow-xl tw-border-0 sm:tw-border sm:tw-border-blue-500">
        <h2 className="tw-text-2xl tw-font-semibold tw-text-blue-950 tw-mb-6">
          {t("VevifyOtpText1")}
        </h2>
        {actionTextSend && (
          <h1 className="text-white text-xl w-full text-center">
            {t("VevifyOtpTextSendOpt")} {otpData.email}
          </h1>
        )}
        <div className="tw-flex  tw-gap-4 tw-mb-6">
          <OtpInput
            value={otpConfirm}
            onChange={(otp) => setOtpConfirm(otp)}
            numInputs={4}
            renderSeparator={<span className="opacity-0"> </span>}
            renderInput={(props) => (
              <input
                {...props}
                style={{
                  width: "4rem",
                  height: "4rem",
                  fontSize: "1.5rem",
                  color: "#2563eb",
                  border: "2px solid #2563eb",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              />
            )}
          />
        </div>
        {messageError && <TextError text={messageError} />}
        <div className="tw-flex tw-gap-2">
          <button
            onClick={handleClear}
            type="button"
            className="tw-w-1/4 tw-bg-blue-500 tw-text-white tw-py-2 tw-rounded-lg hover:tw-bg-blue-600"
          >
            Clear
          </button>
          <button
            onClick={handleCreateOtp}
            type="button"
            className="tw-w-1/4 tw-bg-blue-500 tw-text-white tw-py-2 tw-rounded-lg hover:tw-bg-blue-600"
          >
            {t("VevifyOtpText2")}
          </button>
          <button
            onClick={handleConfirmOtp}
            type="button"
            className="tw-w-1/4 tw-bg-blue-500 tw-text-white tw-py-2 tw-rounded-lg hover:tw-bg-blue-600"
          >
            {t("VevifyOtpText3")}
          </button>
        </div>
      </form>
    </div>
  );
}
