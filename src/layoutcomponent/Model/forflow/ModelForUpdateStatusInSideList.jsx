import { useState } from "react";
import TextError from "../../TextError";

export default function ModelForUpdateStatusInSideList({
  handleEditStatusUserReportId,
  onClose,
  reportId,
}) {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!status) {
      setError("โปรดเลือกสถานะก่อนยืนยัน");
      return;
    }

    try {
      await handleEditStatusUserReportId(reportId, { status });
      onClose();
      window.location.reload();
    } catch (err) {
      console.error("Error updating status:", err);
      setError("ไม่สามารถอัปเดตสถานะได้ โปรดลองใหม่อีกครั้ง");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="tw-w-full tw-p-4">
      {/* ชื่อสถานะ */}
      <label
        htmlFor="status"
        className="tw-block tw-text-lg tw-font-medium tw-text-gray-700 tw-mb-2"
      >
        เลือกสถานะการอัพเดท
      </label>

      {/* Dropdown เลือกสถานะ */}
      <select
        id="status"
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="tw-border tw-border-gray-300 tw-rounded-md tw-px-4 tw-py-2 tw-w-full tw-bg-white focus:tw-ring-2 focus:tw-ring-blue-500"
      >
        <option value="">-- เลือกสถานะ --</option>
        <option value="แจ้ง">แจ้ง</option>
        <option value="รับแจ้งแล้ว">รับแจ้งแล้ว</option>
        <option value="กำลังดำเนินการ">กำลังดำเนินการ</option>
        <option value="จัดการเสร็จสิ้น">จัดการเสร็จสิ้น</option>
        <option value="ยกเลิก">ยกเลิก</option>
      </select>

      {/* แสดงข้อความข้อผิดพลาด */}
      {error && <TextError text={error} />}

      {/* ปุ่มยืนยัน */}
      <button
        type="submit"
        className="tw-mt-4 tw-bg-blue-500 tw-text-white tw-font-medium tw-px-6 tw-py-2 tw-rounded-lg hover:tw-bg-blue-600 focus:tw-ring-2 focus:tw-ring-blue-400 focus:tw-outline-none"
      >
        ยืนยัน
      </button>
    </form>
  );
}
