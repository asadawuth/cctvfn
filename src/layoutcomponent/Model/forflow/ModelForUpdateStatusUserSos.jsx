import { useState } from "react";
import axios from "../../../logic/config/axios";
import TextError from "../../TextError";

export default function ModelForUpdateStatusUserSos({
  id,
  onClose,
  setDataSos,
}) {
  const [inputStatus, setInputStatus] = useState({
    status: "",
  });
  const [textError, setTextError] = useState(false);
  console.log(id);
  const handleOnSubmitForm = async (e) => {
    e.preventDefault();
    if (inputStatus.status === "") {
      setTextError(true);
      return;
    }

    try {
      const res = await axios.patch(`/voicesos/updatestatusidsosvoice/${id}`, {
        status: inputStatus.status,
      });
      if (res.status === 200) {
        setDataSos((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, status: inputStatus.status } : item
          )
        );

        onClose();
      }
    } catch (error) {
      console.error("Error updating status:", error);
      setTextError(true); // แสดงข้อความ error
    }
  };
  const handleChangeInput = (e) => {
    setInputStatus({
      ...inputStatus,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form onSubmit={handleOnSubmitForm} className="tw-w-full tw-p-4">
        <label
          htmlFor="status"
          className="tw-block tw-text-lg tw-font-medium tw-text-gray-700 tw-mb-2"
        >
          เลือกสถานะการอัพเดท
        </label>
        <select
          type="text"
          name="status"
          className="tw-border tw-border-gray-300 tw-rounded-md tw-px-4 tw-py-2 tw-w-full tw-bg-white tw-shadow-sm focus:tw-border-blue-500 focus:tw-ring-1 focus:tw-ring-blue-500 focus:tw-outline-none tw-text-gray-800"
          onChange={handleChangeInput}
          value={inputStatus.status}
        >
          <option value="">-- เลือกสถานะ --</option>
          <option value="แจ้ง">แจ้ง</option>
          <option value="รับแจ้งแล้ว">รับแจ้งแล้ว</option>
          <option value="กำลังดำเนินการ">กำลังดำเนินการ</option>
          <option value="จัดการเร็จสิ้น">จัดการเสร็จสิ้น</option>
          <option value="ยกเลิก">ยกเลิก</option>
        </select>
        <div className="tw-pt-4">
          {textError && <TextError text="โปรดระบุ" />}
        </div>
        <button
          type="submit"
          className="tw-mt-4 tw-bg-blue-500 tw-text-white tw-font-medium tw-px-6 tw-py-2 tw-rounded-md tw-shadow-md hover:tw-bg-blue-600 focus:tw-ring-2 focus:tw-ring-blue-400 focus:tw-outline-none"
        >
          ยืนยัน
        </button>
      </form>
    </>
  );
}
