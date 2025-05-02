import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import SeachDataForSaveExcel from "../../layoutcomponent/forExcel/SeachDataForSaveExcel";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "../../logic/config/axios";
import { useTranslation } from "react-i18next";
export default function UserReportsosExcel() {
  const { t } = useTranslation();
  const [data, setData] = useState({
    start: "",
    end: "",
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const latesFileExcelsosUpdate = async () => {
    try {
      const response = await axios.post(
        `/servicesfileexcel/dataexcel-requestsos/${data.start}/${data.end}`,
        null,
        {
          responseType: "blob",
          validateStatus: (status) =>
            status === 200 || status === 404 || status === 500,
        }
      );

      if (response.status === 404 || response.status === 500) {
        Swal.fire({
          icon: "error",
          title: "ไม่มีข้อมูล",
          text: "ไม่พบข้อมูลในช่วงวันที่ที่เลือก",
        });
        return;
      }

      // ✨ ขอให้ผู้ใช้เลือกที่เก็บไฟล์
      const opts = {
        suggestedName: `userRequestsos_${data.start}_${data.end}.xlsx`, // ชื่อไฟล์แน่ะนำ
        types: [
          {
            description: "Excel File",
            accept: {
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                [".xlsx"], // บังคับ .xlsx
            },
          },
        ],
      };

      const handle = await window.showSaveFilePicker(opts); // เปิดหน้าให้เลือกโฟเดอร์และชื่อไฟล์
      const writable = await handle.createWritable(); // เตรียมเขียนไฟล์
      await writable.write(response.data); // เขียนไฟล์ Excel ลง disk
      await writable.close(); // ปิดไฟล์ (เหมือน save จริง)

      Swal.fire({
        icon: "success",
        title: "ดาวน์โหลดสำเร็จ",
        text: "คุณสามารถเปิดไฟล์จากโฟลเดอร์ที่คุณเลือกได้แล้ว",
      });
    } catch (error) {
      console.error("ดาวน์โหลดไม่สำเร็จ:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถดาวน์โหลดไฟล์ได้",
      });
    }
  };
  return (
    <>
      <HeaderMainMessage text={t("inconponentUserReportsosExcel")} />
      <SeachDataForSaveExcel
        makeDataExcel={latesFileExcelsosUpdate}
        onChange={onChange}
        data={data}
      />
    </>
  );
}
