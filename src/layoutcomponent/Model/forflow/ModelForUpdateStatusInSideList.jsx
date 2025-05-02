import { useState } from "react";
import TextError from "../../TextError";
import { useTranslation } from "react-i18next";

export default function ModelForUpdateStatusInSideList({
  handleEditStatusUserReportId,
  onClose,
  reportId,
}) {
  const { t } = useTranslation();
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
        className="tw-block tw-text-lg tw-font-medium  tw-mb-2"
      >
        {t("selectStatus")}
      </label>

      {/* Dropdown เลือกสถานะ */}
      <select
        id="status"
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="tw-rounded-md tw-px-4 tw-py-2 tw-w-full tw-bg-white tw-border tw-border-gray-300 focus:tw-ring-2 focus:tw-ring-blue-400 focus:tw-border-blue-400 focus:tw-outline-none"
      >
        <option value="">-- {t("select")} --</option>
        <option value="แจ้ง">{t("status1")}</option>
        <option value="รับแจ้งแล้ว">{t("status2")}</option>
        <option value="กำลังดำเนินการ">{t("status3")}</option>
        <option value="จัดการเสร็จสิ้น">{t("status4")}</option>
        <option value="ยกเลิก">{t("status5")}</option>
      </select>

      {/* แสดงข้อความข้อผิดพลาด */}
      {error && <TextError text={error} />}

      {/* ปุ่มยืนยัน */}
      <button
        type="submit"
        className="tw-mt-4 tw-bg-blue-500 tw-text-white tw-font-medium tw-px-6 tw-py-2 tw-rounded-lg hover:tw-bg-blue-600 focus:tw-ring-2 focus:tw-ring-blue-400 focus:tw-outline-none"
      >
        {t("statusUserReportBt")}
      </button>
    </form>
  );
}
