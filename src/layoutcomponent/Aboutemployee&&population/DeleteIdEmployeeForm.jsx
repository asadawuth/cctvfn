import { useState } from "react";
import axios from "../../logic/config/axios.js";
import Model from "../../layoutcomponent/Model";
import ModelForDeleteIdEmployee from "../../layoutcomponent/Model/forflow/ModelForDeleteIdEmployee";
import { useTranslation } from "react-i18next";
export default function DeleteIdEmployeeForm() {
  const { t } = useTranslation();
  const [openModel, setOpenModel] = useState(false);
  const [data, setData] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [searchName, setSearchName] = useState({
    firstName: "",
    lastName: "",
  });
  const [noResult, setNoResult] = useState(false);

  const handleInputChange = (e) => {
    setSearchName({
      ...searchName,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `/user/getForDeleteIdLoginEmployee/${searchName.firstName}/${searchName.lastName}`
      );

      if (response.data && response.data.id) {
        setData([response.data]);
        setNoResult(false);
      } else {
        setData([]);
        setNoResult(true);
      }
    } catch (error) {
      console.error("Error fetching employee data:", error);
      setData([]);
      setNoResult(true);
    }
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setOpenModel(true);
  };

  return (
    <>
      <div className="tw-w-full tw-h-[50vh] tw-flex tw-flex-col tw-gap-8 tw-px-4 sm:tw-px-8 tw-pt-12 tw-bg-slate-100">
        <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-gap-4 tw-justify-center">
          <div className="tw-w-full sm:tw-w-auto">
            <input
              type="text"
              name="firstName"
              className="tw-w-full sm:tw-w-auto tw-p-2 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-blue-400"
              placeholder={t("DataInfileCreatedIdEmployeeForm.firstName")}
              value={searchName.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="tw-w-full sm:tw-w-auto">
            <input
              type="text"
              name="lastName"
              className="tw-w-full sm:tw-w-auto tw-p-2 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-blue-400"
              placeholder={t("DataInfileCreatedIdEmployeeForm.lastName")}
              value={searchName.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="tw-w-full sm:tw-w-auto">
            <button
              onClick={handleSearch}
              className="tw-w-full sm:tw-w-auto tw-bg-blue-500 tw-text-white tw-py-2 tw-px-4 tw-rounded-md hover:tw-bg-blue-600"
            >
              {t("DataInfileCreatedIdEmployeeForm.search")}
            </button>
          </div>
        </div>

        {data.length > 0 ? (
          data.map((employee) => (
            <div
              key={employee.id}
              className="tw-relative tw-overflow-x-auto tw-shadow-md sm:tw-rounded-lg tw-w-full sm:tw-max-w-4xl tw-mx-auto"
            >
              <table className="tw-w-full tw-text-xs sm:tw-text-sm tw-text-left rtl:tw-text-right tw-text-gray-500 dark:tw-text-gray-400">
                <thead className="tw-text-xs tw-text-gray-700  tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400">
                  <tr>
                    <th scope="col" className="tw-px-2 tw-py-2">
                      Id
                    </th>
                    <th scope="col" className="tw-px-2 tw-py-2">
                      {t("DataInfileCreatedIdEmployeeForm.firstName")}
                    </th>
                    <th scope="col" className="tw-px-2 tw-py-2">
                      {t("DataInfileCreatedIdEmployeeForm.lastName")}
                    </th>
                    <th scope="col" className="tw-px-2 tw-py-2">
                      {t("DataInfileCreatedIdEmployeeForm.delete")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:tw-bg-white odd:dark:tw-bg-gray-900 even:tw-bg-gray-50 even:dark:tw-bg-gray-800 tw-border-b dark:tw-border-gray-700">
                    <th
                      scope="row"
                      className="tw-px-2 tw-py-3 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white"
                    >
                      {employee.id}
                    </th>
                    <td className="tw-px-2 tw-py-3">{employee.firstName}</td>
                    <td className="tw-px-2 tw-py-3">{employee.lastName}</td>
                    <td className="tw-px-2 tw-py-3">
                      <button
                        className="tw-text-red-900"
                        onClick={() => handleDelete(employee.id)}
                      >
                        {t("DataInfileCreatedIdEmployeeForm.delete")}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Model
                title={t("ModelForDeleteIdEmployeeText1")}
                open={openModel}
                onClose={() => setOpenModel(false)}
              >
                <ModelForDeleteIdEmployee
                  deleteId={deleteId}
                  onClose={() => setOpenModel(false)}
                />
              </Model>
            </div>
          ))
        ) : noResult ? (
          <div className="sm:tw-text-2xl md:tw-text-2xl xl:tw-text-3xl tw-pt-8 tw-text-center">
            {t("DataInfileCreatedIdEmployeeForm.dataNotFound")}
          </div>
        ) : null}
      </div>
    </>
  );
}
