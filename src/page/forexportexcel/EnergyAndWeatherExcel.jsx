import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import SeachDataForSaveExcel from "../../layoutcomponent/forExcel/SeachDataForSaveExcel";
import { useState } from "react";
import axios from "../../logic/config/axios";

export default function EnergyAndWeatherExcel() {
  const [data, setData] = useState({
    start: "",
    end: "",
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const latesFileExcelUpdate = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <HeaderMainMessage text="บันทึกข้อมูล Excel พลังงานและอุณภูมิ" />
      <SeachDataForSaveExcel
        latesFileExcelUpdate={latesFileExcelUpdate}
        onChange={onChange}
        data={data}
      />
    </>
  );
}
