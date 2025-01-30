import axios from "../../../logic/config/axios";
import { useState } from "react";
import TextError from "../../TextError";
export default function ModelForUpdateStatusUserReport({
  id,
  setDataUserReport,
  onClose,
}) {
  const [inputStatus, setInputStatus] = useState({
    status: "",
  });
  const [textError, setTextError] = useState(false);

  const handleChangeInput = (e) => {
    setInputStatus({
      ...inputStatus,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `/boardreport/changestatusreport/${id}`,
        {
          status: inputStatus.status,
        }
      );
      if (response.status === 200) {
        setDataUserReport((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, status: inputStatus.status } : item
          )
        );
        setDataUserReport((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, status: inputStatus.status } : item
          )
        );

        onClose();
      }
    } catch (error) {
      console.error("Error updating status:", error);
      setTextError(true);
    }
  };
  return (
    <form onSubmit={handleSubmitForm} className="tw-w-full tw-p-4">
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
        <option value="จัดการเสร็จสิ้น">จัดการเสร็จสิ้น</option>
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
  );
}
