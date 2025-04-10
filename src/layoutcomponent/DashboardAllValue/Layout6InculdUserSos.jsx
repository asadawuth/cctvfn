import CardLayout6 from "./CardLayout6";
import { useState, useEffect } from "react";
import axios from "../../logic/config/axios";

export default function Layout6InculdUserSos() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("/voicesos/totalallstatussosvoice")
      .then((res) => {
        const defaultStatus = {
          reported: 0,
          acknowledged: 0,
          inProgress: 0,
          completed: 0,
          canceled: 0,
          allStatus: 0,
        };
        // รวมค่า Default เพื่อป้องกัน undefined
        const cleanData = { ...defaultStatus, ...res.data };
        setData(cleanData);
      })
      .catch((err) => {
        console.log(err);
        setData({
          reported: 0,
          acknowledged: 0,
          inProgress: 0,
          completed: 0,
          canceled: 0,
          allStatus: 0,
        });
      });
  }, []);

  return (
    <>
      <CardLayout6 data={data} />
    </>
  );
}
