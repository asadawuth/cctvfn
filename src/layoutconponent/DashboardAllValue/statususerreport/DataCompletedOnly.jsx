import { useState, useEffect } from "react";
import axios from "../../../logic/config/axios";
import HeaderMainMessage from "../../HeaderMainMessage";
import TitleItem from "../../ForuserReport/TitleItem";
import Biglayout from "../../ForuserReport/ฺBiglayout";
import Patination from "../../Patination";

export default function DataCompletedOnly() {
  const [dataUserCompleted, setDataUserCompleted] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    axios
      .get(`/boardreport/userreportstatuscompleted?_page=${currentPage}`)
      .then((res) => {
        setDataUserCompleted(res.data.reportList);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);
  return (
    <>
      <HeaderMainMessage
        text={"ข้อมูลเฉพาะประชาชนร้องเรียนที่ดำเนินการเสร็จสิ้นแล้ว"}
      />
      <Biglayout>
        <TitleItem
          dataUserReport={dataUserCompleted}
          setDataUserReport={setDataUserCompleted}
        />
        <Patination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </Biglayout>
    </>
  );
}
