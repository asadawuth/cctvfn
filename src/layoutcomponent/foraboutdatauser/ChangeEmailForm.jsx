import { useState } from "react";
import { changeEmailSchema } from "../../logic/validate/validate";
import { useAuth } from "../../logic/hook/user-auth";
import ModelForChangeEmail from "../../layoutcomponent/Model/forflow/ModelForChangeEmail";
import ChangeEmailSuccess from "../../layoutcomponent/Model/ModalSuccess/ChangeEmailSuccess";
import TextError from "../../layoutcomponent/TextError";

const validateChangeEmail = (input) => {
  const { error } = changeEmailSchema.validate(input, { abortEarly: false });
  const result = {};

  if (error) {
    error.details.forEach((el) => {
      const { message, path } = el;
      result[path[0]] = message;
    });
  }
  if (input.oldEmail === "") {
    result.oldEmail = "กรุณากรองอีเมลล์ของผู้ดูแลคนเก่าก่อน";
  }
  if (input.newEmail === "" && input.confirmNewEmail === "") {
    result.confirmNewEmail = "กรุณากรองยืนยันอีเมลล์ใหม่";
  } else if (input.confirmNewEmail === "") {
    result.confirmNewEmail = "กรุณากรอกเพื่อยืนยันอีเมลล์ใหม่";
  }

  return result;
};
export default function ChangeEmailForm() {
  const [openModel, setOpenModel] = useState(false);
  const [inputChangeEmail, setInputChangeEmail] = useState({
    oldEmail: "",
    newEmail: "",
    confirmNewEmail: "",
  });
  const [errorLast, setErrorLast] = useState(false);
  const [error, setError] = useState({});
  const { changeEmail } = useAuth();

  const handleChangeInput = (e) => {
    setInputChangeEmail({
      ...inputChangeEmail,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const result = validateChangeEmail(inputChangeEmail);
    if (Object.keys(result).length > 0) {
      setError(result);
      console.log("Validation errors:", result);
    } else {
      setError({});

      try {
        await changeEmail(inputChangeEmail);
        setOpenModel(true);
        setInputChangeEmail({
          oldEmail: "",
          newEmail: "",
          confirmNewEmail: "",
        });
      } catch (error) {
        console.error(error);
        setErrorLast(true);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          const errorMessage = error.response.data.message;

          if (errorMessage === "อีเมลล์ไม่มี หรือ ข้อมูลไม่ถูกต้อง") {
            setError((prevError) => ({
              ...prevError,
              oldEmail: "ข้อมูลไม่ถูกต้อง",
            }));
          }
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
          <a className="tw-block tw-text-center tw-text-slate-600 tw-text-2xl tw-mt-4 hover:tw-text-blue-500 hover:tw-cursor-pointer tw-pb-8">
            เปลี่ยนอีเมลล์ ?
          </a>
          <div className="tw-mb-4">
            <input
              name="oldEmail"
              type="email"
              placeholder="กรุณากรอกอีเมลล์เก่า"
              className="tw-w-full tw-p-3 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-blue-400"
              value={inputChangeEmail.oldEmail}
              onChange={handleChangeInput}
            />
            {error.oldEmail && <TextError text={error.oldEmail} />}
            {error.general && <TextError text={error.general} />}
          </div>
          <div className="tw-mb-4">
            <input
              name="newEmail"
              type="email"
              placeholder="กรุณากรอกอีเมลล์ใหม่"
              className="tw-w-full tw-p-3 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-blue-400"
              value={inputChangeEmail.newEmail}
              onChange={handleChangeInput}
            />
            {error.newEmail && <TextError text={error.newEmail} />}
          </div>
          <div className="tw-mb-4">
            <input
              name="confirmNewEmail"
              type="email"
              placeholder="กรุณากรอกเพื่อยันยันอีเมลล์ใหม่"
              className="tw-w-full tw-p-3 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-blue-400"
              value={inputChangeEmail.confirmNewEmail}
              onChange={handleChangeInput}
            />
            {error.confirmNewEmail && (
              <TextError text={error.confirmNewEmail} />
            )}
          </div>
          {errorLast && <TextError text="เกิดข้อผิดพลาด" />}
          <button
            type="submit"
            className="tw-w-full tw-bg-blue-500 tw-text-white tw-py-2 tw-px-4 tw-rounded-md hover:tw-bg-blue-600"
          >
            ยืนยันเปลี่ยนอีเมลล์
          </button>
        </form>
      </div>

      {openModel && (
        <ModelForChangeEmail
          title="เปลี่ยนอีเมลล์แอสมินสำเร็จ"
          open={openModel}
        >
          <ChangeEmailSuccess onClose={() => setOpenModel(false)} />
        </ModelForChangeEmail>
      )}
    </>
  );
}
