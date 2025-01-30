import { useState } from "react";
import Loading from "../../../layoutconponent/Loading";
import TextError from "../../TextError";
import axios from "../../../logic/config/axios";

export default function ModelForSendMessageStatusCctpNotpass({
  id,
  onClose,
  setDataUserRequestForWatchCctv,
  oldMessage,
}) {
  const [message, setMessage] = useState(oldMessage || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setError("โปรดระบุข้อความ");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await axios.patch(
        `/documentsrequestcctv/sendtextcassdocumentnotpass/${id}`,
        { remark: message }
      );

      if (res.status === 200) {
        setDataUserRequestForWatchCctv((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, remark: message } : item
          )
        );
        onClose();
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError("เกิดข้อผิดพลาดในการส่งข้อความ");
    } finally {
      setLoading(false);
    }
  };

  const handleChangeInput = (e) => {
    setMessage(e.target.value);
    if (error) setError("");
  };

  return (
    <>
      {/* Loading Indicator */}
      {loading && <Loading />}

      <form onSubmit={handleSubmitForm} className="tw-space-y-4">
        <div className="tw-p-4">
          <h3 className="tw-text-lg tw-font-bold tw-text-gray-700">ข้อความ</h3>
          <textarea
            name="message"
            value={message}
            onChange={handleChangeInput}
            rows="4"
            className={`tw-w-full tw-border tw-rounded-lg tw-p-4 tw-text-base tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 ${
              error
                ? "tw-border-red-500 focus:tw-ring-red-500"
                : "tw-border-gray-300 focus:tw-ring-blue-500"
            }`}
            placeholder="โปรดกรอกข้อความที่ต้องการส่ง..."
          />
          {error && <TextError text={error} style="tw-mt-2 tw-text-red-500" />}
        </div>

        <div className="tw-flex tw-justify-center">
          <button
            type="submit"
            className="tw-bg-gradient-to-r tw-text-lg tw-font-semibold tw-text-white tw-px-10 tw-py-3 tw-rounded-xl tw-shadow-lg hover:tw-scale-105 hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-bg-blue-500 hover:tw-bg-blue-600"
            disabled={loading}
          >
            {loading ? "กำลังส่ง..." : "ยืนยัน"}
          </button>
        </div>
      </form>
    </>
  );
}
