import { useAuth } from "../../../logic/hook/user-auth";
import { useState } from "react";
import { changeDataYourProfile } from "../../../logic/validate/validate";
import Loading from "./../../Loading";

const validateEditsDataYourfile = (input) => {
  const { error } = changeDataYourProfile.validate(input, {
    abortEarly: false,
  });
  if (error) {
    return error.details.reduce((acc, { message, path }) => {
      acc[path[0]] = message;
      return acc;
    }, {});
  }
  return null;
};

export default function ModelForEditYourFlie({ onClose, setUserProfile }) {
  const { authUser, updateUserData, setAuthUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [inputEditsDataProfile, setInputEditsDataProfile] = useState({
    firstName: authUser.firstName,
    lastName: authUser.lastName,
    email: authUser.email,
    phone: authUser.phone,
  });

  const handleChangeInput = (e) => {
    setInputEditsDataProfile({
      ...inputEditsDataProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = validateEditsDataYourfile(inputEditsDataProfile);
    if (validationErrors) {
      setError(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const { updatedUser } = await updateUserData(inputEditsDataProfile);
      console.log("Updated User:", updatedUser);
      setAuthUser((prevUserProfile) => ({
        ...prevUserProfile,
        ...updatedUser,
      }));
      setUserProfile((prevUserProfile) => ({
        ...prevUserProfile,
        ...updatedUser,
      }));

      setError({});
    } catch (error) {
      console.error("Error updating profile:", error);
      setError({
        message: "Failed to update profile. Please try again later.",
      });
    } finally {
      setLoading(false);
      // Ensure onClose is called in the finally block, so it gets called regardless of success or failure
      onClose();
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form onSubmit={handleSubmitForm} className="tw-overflow-y-scroll">
        <div className="tw-px-8 tw-flex tw-flex-col tw-gap-6">
          {["firstName", "lastName", "phone", "email"].map((field, index) => (
            <div key={index}>
              <label className="tw-text-lg tw-font-medium tw-text-gray-700">
                {field === "firstName"
                  ? "ชื่อจริง"
                  : field === "lastName"
                  ? "นามสกุล"
                  : field === "phone"
                  ? "เบอร์โทรศัพท์"
                  : "อีเมลล์"}
              </label>
              <input
                name={field}
                value={inputEditsDataProfile[field]}
                type="text"
                className={`tw-w-full tw-border ${
                  error[field]
                    ? "tw-border-red-500"
                    : "tw-border-gray-300 focus:tw-border-blue-500"
                } tw-rounded-lg tw-p-2 tw-text-lg tw-pl-4`}
                onChange={handleChangeInput}
              />
              {error[field] && (
                <EditsDataYourProfileErrorMessage message={error[field]} />
              )}
            </div>
          ))}
        </div>
        <div className="tw-flex tw-justify-center tw-gap-4 tw-p-6">
          <button
            type="submit"
            className="tw-bg-blue-500 tw-text-white tw-px-6 tw-py-2 tw-rounded-lg hover:tw-bg-blue-600 tw-transition-all tw-duration-200"
          >
            ยืนยัน
          </button>
          <button
            type="button"
            className="tw-bg-gray-500 tw-text-white tw-px-6 tw-py-2 tw-rounded-lg hover:tw-bg-gray-600 tw-transition-all tw-duration-200"
            onClick={onClose}
          >
            ยกเลิก
          </button>
        </div>
      </form>
    </>
  );
}

export function EditsDataYourProfileErrorMessage({ message }) {
  return (
    <p className="tw-text-sm tw-text-red-500 tw-mt-1 tw-pl-2">{message}</p>
  );
}
