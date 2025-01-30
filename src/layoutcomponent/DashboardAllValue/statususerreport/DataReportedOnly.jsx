import { useState, useEffect } from "react";
import axios from "../../../logic/config/axios";
import HeaderMainMessage from "../../HeaderMainMessage";
import TitleItem from "../../ForuserReport/TitleItem";
import Biglayout from "../../ForuserReport/ฺBiglayout";
import Patination from "../../Patination";

export default function DataReportedOnly() {
  const [dataUserReport, setDataUserReport] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(`/boardreport/userreporteddata?_page=${currentPage}`)
      .then((res) => {
        setDataUserReport(res.data.reportList);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  console.log(dataUserReport);
  return (
    <>
      <HeaderMainMessage text={"ข้อมูลเฉพาะประชาชนร้องเรียน"} />
      <Biglayout>
        <TitleItem
          dataUserReport={dataUserReport}
          setDataUserReport={setDataUserReport}
        />
        <Patination
          handlePageChange={handlePageChange}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </Biglayout>
    </>
  );
}
