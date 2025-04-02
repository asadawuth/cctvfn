import HeaderMainMessage from "../layoutcomponent/HeaderMainMessage";
import Layout1 from "../layoutcomponent/ForintegratedInformation/Layout1";
import Layout2 from "../layoutcomponent/ForintegratedInformation/Layout2";
import { useState, useEffect } from "react";
import axios from "../logic/config/axios";

export default function IntegratedInformation() {
  const [dataIntegreted, setDataIntegreted] = useState({});

  /*
  useEffect(() => {
    axios
      .get(`/integratedinformation/DataIntegratedInformation`)
      .then((res) => {
        setDataIntegreted(res.data.dataBefore);
      })
      .catch((err) => {});
  }, []);

  const createNewDataIntegratedInformation = (data) => {
    axios.post("/integratedinformation/UpdateDataIntegratedInformation", data);
  };
  */

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `/integratedinformation/DataIntegratedInformation`
      );
      setDataIntegreted(res.data.dataBefore);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createNewDataIntegratedInformation = async (data) => {
    try {
      await axios.post(
        "/integratedinformation/UpdateDataIntegratedInformation",
        data
      );
      await fetchData(); // ดึงข้อมูลใหม่หลังจากอัปเดต
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  /*
  const latesFileExcelUpdate = async () => {
    try {
      const response = await axios.post(
        "/integratedinformation/SaveLatestFileDataIngratedInformation",
        {
          responseType: "blob", // สำคัญ! เพื่อให้ไฟล์ถูกดาวน์โหลด
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "IntegratedInformation.xlsx"); // ตั้งชื่อไฟล์
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading Excel file:", error);
    }
  };
*/
  return (
    <>
      <HeaderMainMessage text="ข้อมูลบูรณาการ" />
      <hr />
      <Layout1 dataIntegreted={dataIntegreted} />
      <Layout2
        dataIntegreted={dataIntegreted}
        createNewDataIntegratedInformation={createNewDataIntegratedInformation}
        // latesFileExcelUpdate={latesFileExcelUpdate}
      />
    </>
  );
}
