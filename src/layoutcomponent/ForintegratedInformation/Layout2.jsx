import { useState } from "react";
// import Model from "../../layoutcomponent/Model";
import ModelForIntegratedInformation from "../Model/forflow/ModelForIntegratedInformation";
import ModelForUpdateDataIntegrated from "../Model/forflow/ModelForUpdateDataIntegrated";
// import ModelForUpDataIntegratedExcel from "../../layoutcomponent/Model/forflow/ModelForUpDataIntegratedExcel";

export default function Layout2({
  dataIntegreted,
  createNewDataIntegratedInformation,
  // latesFileExcelUpdate,
}) {
  const [openModelUpdateData, setOpenModelData] = useState(false);
  // const [openModelCreateFileExcel, setOpenModelCreateFileExcel] =
  //   useState(false);

  return (
    <>
      <div className="tw-bg-gray-100 tw-w-full tw-flex tw-justify-center tw-gap-8 tw-py-4">
        <div>
          <button
            onClick={() => setOpenModelData(true)}
            className="tw-bg-blue-500 tw-text-white tw-p-3 tw-px-10 tw-rounded-lg tw-shadow-md hover:tw-bg-blue-600 hover:tw-shadow-lg transition-all duration-300 tw-flex tw-items-center tw-gap-2"
          >
            ✏️ <span>อัปเดตข้อมูล</span>
          </button>
        </div>
        {/* <div>
          <button
            onClick={() => setOpenModelCreateFileExcel(true)}
            className="tw-bg-green-500 tw-text-white tw-p-3 tw-px-10 tw-rounded-lg tw-shadow-md hover:tw-bg-green-600 hover:tw-shadow-lg transition-all duration-300 tw-flex tw-items-center tw-gap-2"
          >
            📥 <span>บันทึกลง Excel</span>
          </button>
        </div> */}
      </div>
      <ModelForIntegratedInformation
        title="อัปเดตข้อมูลบูรณาการ"
        open={openModelUpdateData}
        onClose={() => setOpenModelData(false)}
      >
        <ModelForUpdateDataIntegrated
          dataIntegreted={dataIntegreted}
          createNewDataIntegratedInformation={
            createNewDataIntegratedInformation
          }
          onClose={() => setOpenModelData(false)}
        />
      </ModelForIntegratedInformation>

      {/* <Model
        title="โหลดข้อมูลลงExcel"
        open={openModelCreateFileExcel}
        onClose={() => setOpenModelCreateFileExcel(false)}
      >
        <ModelForUpDataIntegratedExcel
          onClose={() => setOpenModelCreateFileExcel(false)}
          latesFileExcelUpdate={latesFileExcelUpdate}
        />
      </Model> */}
    </>
  );
}
