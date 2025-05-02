import { useEffect, useState } from "react";
import { useAuth } from "../../../logic/hook/user-auth";
import { changeDataYourProfile } from "../../../logic/validate/validate";
import Loading from "./../../Loading";
import { useTranslation } from "react-i18next";

const validateEditsDataYourfile = (input, t) => {
  const { error } = changeDataYourProfile.validate(input, {
    abortEarly: false,
  });
  if (error) {
    return error.details.reduce((acc, { message, path }) => {
      acc[path[0]] = t(message);
      return acc;
    }, {});
  }
  return null;
};

export default function ModelForEditYourFlie({
  open,
  onClose,
  setUserProfile,
}) {
  const { t } = useTranslation();
  const { authUser, updateUserData, setAuthUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [inputEditsDataProfile, setInputEditsDataProfile] = useState({
    firstName: authUser.firstName,
    lastName: authUser.lastName,
    email: authUser.email,
    phone: authUser.phone,
  });

  useEffect(() => {
    if (open) {
      setError({});
    }
  }, [open]);

  if (!open) return null;

  const handleChangeInput = (e) => {
    setInputEditsDataProfile({
      ...inputEditsDataProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = validateEditsDataYourfile(
      inputEditsDataProfile,
      t
    );
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
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);

      const status = error?.response?.status;
      if (status === 500) {
        setError({
          message: t("changeDataYourProfileText1"),
        });
      } else {
        setError({
          message: t("changeDataYourProfileText2"),
        });
      }
    } finally {
      setLoading(false);
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
                  ? t("DataInfileCreatedIdEmployeeForm.firstName")
                  : field === "lastName"
                  ? t("DataInfileCreatedIdEmployeeForm.lastName")
                  : field === "phone"
                  ? t("DataInfileCreatedIdEmployeeForm.tel")
                  : t("DataInfileCreatedIdEmployeeForm.email")}
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

        {error.message && (
          <div className="tw-mt-4 tw-text-center">
            <EditsDataYourProfileErrorMessage message={error.message} />
          </div>
        )}

        <div className="tw-flex tw-justify-center tw-gap-4 tw-p-6">
          <button
            type="submit"
            className="tw-bg-blue-500 tw-text-white tw-px-6 tw-py-2 tw-rounded-lg hover:tw-bg-blue-600 tw-transition-all tw-duration-200"
          >
            {t("ModelForUserDataEditText2")}
          </button>
          <button
            type="button"
            className="tw-bg-gray-500 tw-text-white tw-px-6 tw-py-2 tw-rounded-lg hover:tw-bg-gray-600 tw-transition-all tw-duration-200"
            onClick={onClose}
          >
            {t("ModelForUserDataEditText3")}
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
