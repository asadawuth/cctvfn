import { useState } from "react";
import Model from "../../Model";
import ModelPostForReportUser from "../../Model/forflow/ModelPostForReportUser";

export default function Layout1Button({ handleCreateCommentIdUserReportId }) {
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      <div className="tw-flex tw-justify-end tw-bg-gray-100">
        <button
          className="tw-bg-blue-400 tw-py-2 tw-p-8 hover:tw-text-white"
          onClick={() => setOpenModel(true)}
        >
          ตอบกลับปัญหาประชาชน
        </button>
        <button
          className="tw-bg-blue-700 tw-py-2 tw-p-8 hover:tw-text-white"
          onClick={() =>
            (window.location.href = "http://localhost:5173/userReport")
          }
        >
          กลับไปที่หัวข้อร้องเรียน
        </button>
      </div>
      <Model
        title="ตอบกลับปัญหาประชาชนเพื่ออัทเดท"
        open={openModel}
        onClose={() => setOpenModel(false)}
      >
        <ModelPostForReportUser
          handleCreateCommentIdUserReportId={handleCreateCommentIdUserReportId}
          onClose={() => setOpenModel(false)}
        />
      </Model>
    </>
  );
}
