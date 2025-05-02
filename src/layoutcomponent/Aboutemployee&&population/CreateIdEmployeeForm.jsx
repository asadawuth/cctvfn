import TextError from "../TextError";
import { useState } from "react";
import { useAuth } from "../../logic/hook/user-auth";
import { registerIdEmployee } from "../../logic/validate/validate";
import Model from "../../layoutcomponent/Model";
import RegisterIdEmployeeSuccess from "../Model/ModalSuccess/CreateIdEmployeeSuccess";
import { useTranslation } from "react-i18next";

/*
const validateRegister = (input) => {
  const { error } = registerIdEmployee.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});

    if (input.password === "" && !result.confirmPassword) {
      result.confirmPassword = "กรุณาใส่ยืนยันรหัส";
    }
    if (input.gender === "") {
      result.gender = "กรุณาเลือกคำนำหน้า";
    }

    return result;
  }
};
*/
const validateRegister = (input, t) => {
  const { error } = registerIdEmployee.validate(input, { abortEarly: false });
  // console.dir(error);
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el; //  Desturing
      // console.log(el); // context message path type
      acc[path[0]] = t(message); // ใช้ key ไปแปล
      // console.log(acc);
      //path[0] confirmPassword : "Please confirm your password";  message มาจาก validate
      //path[0] firstName: "Please enter your first name"; message มาจาก validate
      //path[0] gender: "Please select a title"; message มาจาก validate
      //path[0] lastName: "Please enter your last name"; message มาจาก validate
      //path[0] phone: "Please enter your phone number"; message มาจาก validate
      //path[0] status: "Please select a status"; message มาจาก validate
      return acc;
    }, {});
    if (input.password === "" && !result.confirmPassword) {
      result.confirmPassword = t("validate.confirmPassword.empty");
    }
    if (input.gender === "") {
      result.gender = t("validate.gender.required");
    }
    // console.log(result);
    return result;
  }
};
export default function CreateIdEmployeeForm() {
  const { t } = useTranslation();
  const [openModel, setOpenModel] = useState(false);
  const { register } = useAuth();
  const [inputRegister, setInputRegister] = useState({
    gender: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    status: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInputRegister({ ...inputRegister, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const result = validateRegister(inputRegister, t);
    if (result) {
      setError(result);
    } else {
      setError({});
      try {
        await register(inputRegister);
        setOpenModel(true);
        setInputRegister({
          gender: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          status: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="tw-w-full tw-min-h-[70vh] tw-flex tw-flex-col tw-gap-8 tw-px-4 tw-py-4 sm:tw-px-8 tw-bg-slate-200">
      <form
        onSubmit={handleSubmitForm}
        className="tw-bg-white tw-flex tw-flex-col tw-gap-6 tw-justify-center tw-items-center tw-mx-auto tw-p-6 sm:tw-p-12 tw-border-4 tw-border-white tw-rounded-2xl tw-w-[100%] sm:tw-w-[90%] md:tw-w-[80%] lg:tw-w-[50%] xl:tw-w-[40%]"
      >
        <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full">
          <div className="tw-w-full">
            <select
              type="text"
              name="gender"
              className="tw-border-2 tw-border-blue-400 tw-bg-transparent tw-w-full tw-rounded-lg tw-p-2 focus:tw-border-blue-600 focus:tw-outline-none"
              onChange={handleChangeInput}
              value={inputRegister.gender}
            >
              <option value="">
                {t("DataInfileCreatedIdEmployeeForm.selectgender")}
              </option>
              <option value="นาย">
                {t("DataInfileCreatedIdEmployeeForm.mr")}
              </option>
              <option value="นาง">
                {t("DataInfileCreatedIdEmployeeForm.mrs")}
              </option>
              <option value="นางสาว">
                {t("DataInfileCreatedIdEmployeeForm.ms")}
              </option>
            </select>
            {error.gender && <TextError text={error.gender} />}
          </div>
          <br />
          <label className="tw-font-medium">
            {" "}
            {t("DataInfileCreatedIdEmployeeForm.firstName")}
          </label>
          <input
            type="text"
            name="firstName"
            className="tw-border-b tw-bg-transparent tw-outline-none focus:tw-border-blue-400 focus:tw-bg-blue-50 tw-transition-all tw-duration-300 tw-ease-in-out tw-w-full tw-py-2 tw-pl-2"
            placeholder={t("DataInfileCreatedIdEmployeeForm.firstNameGuess")}
            value={inputRegister.firstName}
            onChange={handleChangeInput}
          />
          {error.firstName && <TextError text={error.firstName} />}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full">
          <label className="tw-font-medium">
            {" "}
            {t("DataInfileCreatedIdEmployeeForm.lastName")}
          </label>
          <input
            type="text"
            name="lastName"
            className="tw-border-b tw-bg-transparent tw-outline-none focus:tw-border-blue-400 focus:tw-bg-blue-50 tw-transition-all tw-duration-300 tw-ease-in-out tw-w-full tw-py-2 tw-pl-2"
            placeholder={t("DataInfileCreatedIdEmployeeForm.lastNameGuess")}
            value={inputRegister.lastName}
            onChange={handleChangeInput}
          />
          {error.lastName && <TextError text={error.lastName} />}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full">
          <label className="tw-font-medium">
            {" "}
            {t("DataInfileCreatedIdEmployeeForm.email")}
          </label>
          <input
            type="text"
            name="email"
            className="tw-border-b tw-bg-transparent tw-outline-none focus:tw-border-blue-400 focus:tw-bg-blue-50 tw-transition-all tw-duration-300 tw-ease-in-out tw-w-full tw-py-2 tw-pl-2"
            placeholder={t("DataInfileCreatedIdEmployeeForm.emailGuess")}
            value={inputRegister.email}
            onChange={handleChangeInput}
          />
          {error.email && <TextError text={error.email} />}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full">
          <label className="tw-font-medium">
            {" "}
            {t("DataInfileCreatedIdEmployeeForm.tel")}
          </label>
          <input
            type="text"
            name="phone"
            className="tw-border-b tw-bg-transparent tw-outline-none focus:tw-border-blue-400 focus:tw-bg-blue-50 tw-transition-all tw-duration-300 tw-ease-in-out tw-w-full tw-py-2 tw-pl-2"
            placeholder={t("DataInfileCreatedIdEmployeeForm.telGuess")}
            value={inputRegister.phone}
            onChange={handleChangeInput}
          />
          {error.phone && <TextError text={error.phone} />}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full">
          <label className="tw-font-medium">
            {" "}
            {t("DataInfileCreatedIdEmployeeForm.password")}
          </label>
          <input
            type="password"
            name="password"
            className="tw-border-b tw-bg-transparent tw-outline-none focus:tw-border-blue-400 focus:tw-bg-blue-50 tw-transition-all tw-duration-300 tw-ease-in-out tw-w-full tw-py-2 tw-pl-2"
            placeholder={t("DataInfileCreatedIdEmployeeForm.passwordGuess")}
            value={inputRegister.password}
            onChange={handleChangeInput}
          />
          {error.password && <TextError text={error.password} />}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full">
          <label className="tw-font-medium">
            {" "}
            {t("DataInfileCreatedIdEmployeeForm.confirmPassword")}
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="tw-border-b tw-bg-transparent tw-outline-none focus:tw-border-blue-400 focus:tw-bg-blue-50 tw-transition-all tw-duration-300 tw-ease-in-out tw-w-full tw-py-2 tw-pl-2"
            placeholder={t(
              "DataInfileCreatedIdEmployeeForm.confirmPasswordGuess"
            )}
            value={inputRegister.confirmPassword}
            onChange={handleChangeInput}
          />
          {error.confirmPassword && <TextError text={error.confirmPassword} />}
        </div>
        <div className="tw-w-full">
          <label className="tw-font-medium">
            {" "}
            {t("DataInfileCreatedIdEmployeeForm.tesk")}
          </label>
          <select
            type="text"
            name="status"
            className="tw-border-2 tw-border-blue-400 tw-bg-transparent tw-w-full tw-rounded-lg tw-p-2 focus:tw-border-blue-600 focus:tw-outline-none"
            onChange={handleChangeInput}
            value={inputRegister.status}
          >
            <option value="">
              {" "}
              {t("DataInfileCreatedIdEmployeeForm.teskGuess")}
            </option>
            <option value="ผู้ดูแลระบบ">
              {" "}
              {t("DataInfileCreatedIdEmployeeForm.status.admin")}
            </option>
            <option value="ผู้ดำเนินการศูนย์บัญชาการ">
              {t("DataInfileCreatedIdEmployeeForm.status.operator")}
            </option>
            <option value="เจ้าหน้าที่ซ่อมบำรุง">
              {t("DataInfileCreatedIdEmployeeForm.status.maintenance")}
            </option>
          </select>
          {error.status && (
            <TextError text={error.status} className="tw-pt-2" />
          )}{" "}
          <br />
        </div>
        <button
          type="submit"
          className="tw-bg-blue-400 tw-p-4 tw-text-white hover:tw-cursor-pointer tw-rounded-2xl hover:tw-bg-blue-900"
        >
          {t("DataInfileCreatedIdEmployeeForm.register")}
        </button>
      </form>
      {openModel && (
        <Model
          title={t("modelCreateIdEmployeeSuccessText1")}
          open={openModel}
          onClose={() => setOpenModel(false)}
        >
          <RegisterIdEmployeeSuccess onClose={() => setOpenModel(false)} />
        </Model>
      )}
    </div>
  );
}
