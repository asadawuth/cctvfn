import { useState, useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import iconUser from "../../assets/foruser/iconforuser.png";
import bgCrad from "../../assets/forheaderandfooter/header.png";
import Model from "../../layoutcomponent/Model";
import ModelForEditYourFlie from "../../layoutcomponent/Model/forflow/ModelForEditYourFlie";
import ModelForUserDataEdit from "../../layoutcomponent/Model/forflow/ModelForUserDataEdit";
import ModelForSetDefaultProfile from "../../layoutcomponent/Model/forflow/ModelForSetDefaultProfile";
import Loading from "../../layoutcomponent/Loading";

export default function DataUserForm({ authUser, updataProfile, setAuthUser }) {
  const [loading, setLoading] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [openModelChangeProfile, setModelChangeProfile] = useState(false);
  const [okCancel, setOkCancel] = useState(false);
  const [file, setFile] = useState(null);
  const inputEl = useRef(null);

  const uploadImage = async (input) => {
    try {
      const formData = new FormData();
      formData.append("imageProfile", input);
      setLoading(true);

      const response = await updataProfile(formData);

      if (response?.profileUrl) {
        setAuthUser((prev) => ({ ...prev, profile: response.profileUrl }));
      } else {
        console.error("Profile update failed, no profile data in response.");
      }

      setOkCancel(false);
      setFile(null);
      inputEl.current.value = "";
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="tw-bg-slate-100 tw-p-6">
        <div className="tw-max-w-md tw-mx-auto tw-bg-white tw-shadow-2xl tw-rounded-2xl tw-overflow-hidden">
          {/* Header Profile */}
          <div className="tw-relative">
            <img
              src={bgCrad}
              alt="Background"
              className="tw-h-44 tw-w-full tw-object-cover tw-rounded-t-2xl"
            />
            <div className="tw-absolute tw-top-1/2 tw-left-1/2 tw-transform tw--translate-x-1/2 tw--translate-y-1/2 tw-border-4 tw-border-white tw-rounded-full tw-bg-white tw-p-1">
              <img
                onClick={() => inputEl.current.click()}
                src={
                  file
                    ? URL.createObjectURL(file)
                    : authUser.profile || iconUser
                }
                alt="Profile"
                className="tw-w-32 tw-h-32 hover:tw-w-36 hover:tw-h-36 hover:tw-cursor-pointer tw-object-contain tw-rounded-full tw-transition-all tw-duration-300"
              />
            </div>
          </div>
          {/* User Info */}
          <div className="tw-p-6">
            {file && (
              <div
                className={`tw-flex tw-justify-center tw-gap-4 tw-px-4 ${
                  okCancel ? "hidden" : ""
                }`}
              >
                <button
                  className="tw-bg-gradient-to-r tw-from-green-400 tw-to-green-500 hover:tw-from-green-500 hover:tw-to-green-700 tw-text-white tw-w-full tw-p-2 tw-rounded-lg tw-shadow-md hover:tw-shadow-lg tw-transition-all tw-duration-300 tw-font-semibold"
                  onClick={() => uploadImage(file)}
                >
                  ยืนยัน
                </button>
                <button
                  className="tw-bg-gradient-to-r tw-from-red-400 tw-to-red-500 hover:tw-from-red-500 hover:tw-to-red-700 tw-text-white tw-w-full tw-p-2 tw-rounded-lg tw-shadow-md hover:tw-shadow-lg tw-transition-all tw-duration-300 tw-font-semibold"
                  onClick={() => {
                    inputEl.current.value = "";
                    setFile(null);
                  }}
                >
                  ยกเลิก
                </button>
              </div>
            )}
            <input
              type="file"
              className="tw-hidden"
              ref={inputEl}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <h2 className="tw-text-center tw-text-2xl tw-font-bold tw-text-gray-800">
              ข้อมูลผู้ใช้
            </h2>

            <div className="tw-mt-6">
              <div className="tw-font-serif tw-flex tw-justify-end">
                <div className="tw-pb-4">
                  <AiFillEdit
                    className="tw-text-2xl hover:tw-cursor-pointer hover:tw-text-blue-800 hover:tw-scale-110 tw-transition-transform tw-duration-300"
                    onClick={() => setOpenModel(true)}
                  />
                </div>
              </div>
              <div className="tw-flex tw-justify-between tw-items-center tw-py-2 tw-border-b tw-border-gray-300">
                <span className="tw-font-medium tw-text-gray-600">
                  ชื่อจริง
                </span>
                <span className="tw-text-gray-800">{authUser?.firstName}</span>
              </div>
              <div className="tw-flex tw-justify-between tw-items-center tw-py-2 tw-border-b tw-border-gray-300">
                <span className="tw-font-medium tw-text-gray-600">นามสกุล</span>
                <span className="tw-text-gray-800">{authUser?.lastName}</span>
              </div>
              <div className="tw-flex tw-justify-between tw-items-center tw-py-2 tw-border-b tw-border-gray-300">
                <span className="tw-font-medium tw-text-gray-600">สถานะ</span>
                <span className="tw-text-gray-800">{authUser?.status}</span>
              </div>
              <div className="tw-flex tw-justify-between tw-items-center tw-py-2 tw-border-b tw-border-gray-300">
                <span className="tw-font-medium tw-text-gray-600">
                  เบอร์โทรศัพท์
                </span>
                <span className="tw-text-gray-800">{authUser?.phone}</span>
              </div>
              <div className="tw-flex tw-justify-between tw-items-center tw-py-2 tw-border-b tw-border-gray-300">
                <span className="tw-font-medium tw-text-gray-600">อีเมลล์</span>
                <span className="tw-text-gray-800">{authUser?.email}</span>
              </div>
            </div>
            <div className="tw-mt-6 tw-flex tw-justify-around">
              <a
                href="/yourprofile/changeemail"
                className="tw-text-blue-500 hover:tw-text-blue-700 tw-font-medium tw-transition-colors"
              >
                เปลี่ยนอีเมลล์ ?
              </a>
              <a
                href="/yourprofile/changepassword"
                className="tw-text-blue-500 hover:tw-text-blue-700 tw-font-medium tw-transition-colors"
              >
                เปลี่ยนรหัสผ่าน ?
              </a>
              <a
                onClick={() => setModelChangeProfile(true)}
                className="tw-text-blue-500 hover:tw-text-blue-700 tw-font-medium tw-transition-colors hover:tw-cursor-pointer"
              >
                ไม่ใช้รูปโปรไฟล์ ?
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Modals */}
      {openModel && (
        <ModelForUserDataEdit
          title="แก้ไขข้อมูล"
          open={openModel}
          onClose={() => setOpenModel(false)}
        >
          <ModelForEditYourFlie
            open={openModel}
            onClose={() => setOpenModel(false)}
            setUserProfile={setAuthUser}
          />
        </ModelForUserDataEdit>
      )}
      <Model
        title="ตั้งค่ารูปกับเป็นค่าเดิม"
        open={openModelChangeProfile}
        onClose={() => setModelChangeProfile(false)}
      >
        <ModelForSetDefaultProfile
          onClose={() => setModelChangeProfile(false)}
          setAuthUser={setAuthUser}
        />
      </Model>
    </>
  );
}
