import HeaderMainMessage from "../layoutcomponent/HeaderMainMessage";
import Layout1 from "../layoutcomponent/ForintegratedInformation/Layout1";
import Layout2 from "../layoutcomponent/ForintegratedInformation/Layout2";
import { useState, useEffect } from "react";
import axios from "../logic/config/axios";

export default function IntegratedInformation() {
  const [dataIntegreted, setDataIntegreted] = useState({});

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
  return (
    <>
      <HeaderMainMessage text="ข้อมูลบูรณาการ" />
      <hr />
      <Layout1 dataIntegreted={dataIntegreted} />
      <Layout2
        dataIntegreted={dataIntegreted}
        createNewDataIntegratedInformation={createNewDataIntegratedInformation}
      />
    </>
  );
}
