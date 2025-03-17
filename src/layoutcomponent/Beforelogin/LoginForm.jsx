import { useState } from "react";
import { loginSchema } from "../../logic/validate/validate";
import { useAuth } from "../../logic/hook/user-auth";
import TextError from "../TextError";

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });
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
export default function LoginForm() {
  const { login } = useAuth();
  const [signup, setSignup] = useState({
    emailOrMobile: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [errorEmailOrMobile, setErrorEmailOrMobile] = useState({});

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const result = validateLogin(signup);

    if (Object.keys(result).length > 0) {
      setError(result);
      setErrorEmailOrMobile({});
      return;
    } else {
      setError({});
      setErrorEmailOrMobile({});
    }

    try {
      const authUser = await login(signup);
      if (authUser) {
        setErrorEmailOrMobile({ credential: "" });
      }
    } catch (error) {
      setErrorEmailOrMobile({
        credential: "เข้าระบบไม่ได้เนื่องจาก ข้อมูลไม่ถูกต้อง",
      });
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
            className="tw-w-full tw-p-3 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-blue-400"
            placeholder="ระบุเบอร์โทรศัพท์หรืออีเมลล์"
            value={signup.emailOrMobile}
            onChange={(e) =>
              setSignup({ ...signup, emailOrMobile: e.target.value })
            }
          />
          {error.emailOrMobile && <TextError text={error.emailOrMobile} />}
        </div>
        <div className="tw-mb-4">
          <input
            type="password"
            className="tw-w-full tw-p-3 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-blue-400"
            placeholder="ระบุรหัสผ่าน"
            value={signup.password}
            onChange={(e) => setSignup({ ...signup, password: e.target.value })}
          />
          {error.password && <TextError text={error.password} />}
        </div>
        <button
          type="submit"
          className="tw-w-full tw-bg-blue-500 tw-text-white tw-py-2 tw-px-4 tw-rounded-md hover:tw-bg-blue-600"
        >
          เข้าสู่ระบบ
        </button>
        <a
          className="tw-block tw-text-center tw-text-slate-600 tw-text-sm tw-mt-4 hover:tw-text-blue-500"
          href="/verifyemail"
        >
          ลืมรหัสผ่าน ?
        </a>
        {errorEmailOrMobile.credential && (
          <TextError text={errorEmailOrMobile.credential} />
        )}
      </form>
    </div>
  );
}
