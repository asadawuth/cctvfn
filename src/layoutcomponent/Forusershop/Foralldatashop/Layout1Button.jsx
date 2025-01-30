import { useState } from "react";
import Model from "../../Model";
import ModelForCommentShopUser from "../../Model/forflow/ModelForCommentShopUser";

export default function Layout1Button({ handlePostComment }) {
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      <div className="tw-flex tw-justify-end">
        <button
          onClick={() => setOpenModel(true)}
          className="tw-bg-blue-400 tw-py-2 tw-p-8 hover:tw-text-white"
        >
          โพสร้านของประชาชน
        </button>
        <button
          className="tw-bg-blue-700 tw-py-2 tw-p-8 hover:tw-text-white"
          onClick={() =>
            (window.location.href = "http://localhost:5173/report-request")
          }
        >
          กลับไปที่หัวข้อร้านค้า
        </button>
      </div>
      <Model
        title="คอมเม้นร้านของประชาชน"
        open={openModel}
        onClose={() => setOpenModel(false)}
      >
        <ModelForCommentShopUser
          onClose={() => setOpenModel(false)}
          handlePostComment={handlePostComment}
        />
      </Model>
    </>
  );
}
