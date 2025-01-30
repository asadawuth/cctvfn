import TextError from "../TextError";
import { useState } from "react";
import { useAuth } from "../../logic/hook/user-auth";
import { registerIdEmployee } from "../../logic/validate/validate";
import Model from "../../layoutcomponent/Model";

import RegisterIdEmployeeSuccess from "../Model/ModalSuccess/CreateIdEmployeeSuccess";

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

    return result;
  }
};

export default function CreateIdEmployeeForm() {
  const [openModel, setOpenModel] = useState(false);
  const { register } = useAuth();
  const [inputRegister, setInputRegister] = useState({
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
    const result = validateRegister(inputRegister);
    if (result) {
      setError(result);
    } else {
      setError({});
      try {
        await register(inputRegister);
        setOpenModel(true);
        setInputRegister({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          status: "",
          password: "",
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
          <label className="tw-font-medium">ชื่อจริง</label>
          <input
            type="text"
            name="firstName"
            className="tw-border-b tw-bg-transparent tw-outline-none focus:tw-border-blue-400 focus:tw-bg-blue-50 tw-transition-all tw-duration-300 tw-ease-in-out tw-w-full tw-py-2 tw-pl-2"
            placeholder="กรอกชื่อจริง"
            value={inputRegister.firstName}
            onChange={handleChangeInput}
          />
          {error.firstName && <TextError text={error.firstName} />}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full">
          <label className="tw-font-medium">นามสกุล</label>
          <input
            type="text"
            name="lastName"
            className="tw-border-b tw-bg-transparent tw-outline-none focus:tw-border-blue-400 focus:tw-bg-blue-50 tw-transition-all tw-duration-300 tw-ease-in-out tw-w-full tw-py-2 tw-pl-2"
            placeholder="กรอกนามสกุล"
            value={inputRegister.lastName}
            onChange={handleChangeInput}
          />
          {error.lastName && <TextError text={error.lastName} />}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full">
          <label className="tw-font-medium">อีเมลล์</label>
          <input
            type="text"
            name="email"
            className="tw-border-b tw-bg-transparent tw-outline-none focus:tw-border-blue-400 focus:tw-bg-blue-50 tw-transition-all tw-duration-300 tw-ease-in-out tw-w-full tw-py-2 tw-pl-2"
            placeholder="กรอกอีเมลล์"
            value={inputRegister.email}
            onChange={handleChangeInput}
          />
          {error.email && <TextError text={error.email} />}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full">
          <label className="tw-font-medium">เบอร์โทรศัพท์</label>
          <input
            type="text"
            name="phone"
            className="tw-border-b tw-bg-transparent tw-outline-none focus:tw-border-blue-400 focus:tw-bg-blue-50 tw-transition-all tw-duration-300 tw-ease-in-out tw-w-full tw-py-2 tw-pl-2"
            placeholder="กรอกเบอร์โทรศัพท์"
            value={inputRegister.phone}
            onChange={handleChangeInput}
          />
          {error.phone && <TextError text={error.phone} />}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full">
          <label className="tw-font-medium">รหัสผ่าน</label>
          <input
            type="password"
            name="password"
            className="tw-border-b tw-bg-transparent tw-outline-none focus:tw-border-blue-400 focus:tw-bg-blue-50 tw-transition-all tw-duration-300 tw-ease-in-out tw-w-full tw-py-2 tw-pl-2"
            placeholder="กรอกรหัสผ่าน"
            value={inputRegister.password}
            onChange={handleChangeInput}
          />
          {error.password && <TextError text={error.password} />}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full">
          <label className="tw-font-medium">ยืนยันรหัสผ่าน</label>
          <input
            type="password"
            name="confirmPassword"
            className="tw-border-b tw-bg-transparent tw-outline-none focus:tw-border-blue-400 focus:tw-bg-blue-50 tw-transition-all tw-duration-300 tw-ease-in-out tw-w-full tw-py-2 tw-pl-2"
            placeholder="กรอกรหัสผ่าน"
            value={inputRegister.confirmPassword}
            onChange={handleChangeInput}
          />
          {error.confirmPassword && <TextError text={error.confirmPassword} />}
        </div>
        {error.status && <TextError text={error.status} />}
        <div className="tw-w-full">
          <label className="tw-font-medium">เลือกประเภท</label>
          <select
            type="text"
            name="status"
            className="tw-border-2 tw-border-blue-400 tw-bg-transparent tw-w-full tw-rounded-lg tw-p-2 focus:tw-border-blue-600 focus:tw-outline-none"
            onChange={handleChangeInput}
            value={inputRegister.status}
          >
            <option value="">เลือกประเภท</option>
            <option value="ผู้ดูแลระบบ">ผู้ดูแลระบบ</option>
            <option value="ผู้ดำเนินการศูนย์บัญชาการ">
              ผู้ดำเนินการศูนย์บัญชาการ
            </option>
            <option value="เจ้าที่หน้าซ่อมบำรุง">เจ้าที่หน้าซ่อมบำรุง</option>
          </select>
        </div>
        <button
          type="submit"
          className="tw-bg-blue-400 tw-p-4 tw-text-white hover:tw-cursor-pointer tw-rounded-2xl hover:tw-bg-blue-900"
        >
          ยืนยันสมัครไอดีพนักงาน
        </button>
      </form>
      {openModel && (
        <Model
          title="สมัครไอดีพนักงานสำเร็จ"
          open={openModel}
          onClose={() => setOpenModel(false)}
        >
          <RegisterIdEmployeeSuccess onClose={() => setOpenModel(false)} />
        </Model>
      )}
    </div>
  );
}
