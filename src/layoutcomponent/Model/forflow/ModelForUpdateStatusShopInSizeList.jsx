import TextError from "../../TextError";
import { useState } from "react";

export default function ModelForUpdateStatusShopInSizeList({
  id,
  onClose,
  handleUpdateStatus,
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
    if (!inputStatus.status) {
      setTextError(true);
      return;
    }
    try {
      await handleUpdateStatus(id, inputStatus.status);
      onClose();
    } catch (error) {
      console.error("Error updating status:", error);
      setTextError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitForm} className="tw-w-full tw-p-4">
        <label
          htmlFor="status"
          className="tw-block tw-text-lg tw-font-medium tw-text-gray-700 tw-mb-2"
        >
          เลือกสถานะการอัพเดท
        </label>
        <select
          name="status"
          onChange={handleChangeInput}
          className="tw-border tw-border-gray-300 tw-rounded-md tw-px-4 tw-py-2 tw-w-full tw-bg-white tw-shadow-sm focus:tw-border-blue-500 focus:tw-ring-1 focus:tw-ring-blue-500 focus:tw-outline-none tw-text-gray-800"
        >
          <option value="">-- เลือกสถานะ --</option>
          <option value="ส่งเรื่องแล้ว">ส่งเรื่องแล้ว</option>
          <option value="กำลังเช็คเอกสาร">กำลังเช็คเอกสาร</option>
          <option value="ขอเอกสารเพิ่ม">ขอเอกสารเพิ่ม</option>
          <option value="สำเสร็จ">สำเสร็จ</option>
          <option value="ไม่ผ่าน">ไม่ผ่าน</option>
        </select>
        {textError && (
          <div className="tw-pt-4">
            <TextError text="โปรดระบุสถานะ" />
          </div>
        )}
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
