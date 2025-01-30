import { useState, useEffect } from "react";
import axios from "../../../logic/config/axios";
import HeaderMainMessage from "../../HeaderMainMessage";
import TitleItem from "../../ForuserReport/TitleItem";
import Biglayout from "../../ForuserReport/ฺBiglayout";
import Patination from "../../Patination";

export default function DataInProgressOnly() {
  const [dataUserInprogress, setDataUserInprogress] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    axios
      .get(`/boardreport/userreportstatusinprogress?_page=${currentPage}`)
      .then((res) => {
        setDataUserInprogress(res.data.reportList);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);
  return (
    <>
      <HeaderMainMessage
        text={"ข้อมูลเฉพาะประชาชนร้องเรียนที่กำลังดำเนินการอยู่"}
      />
      <Biglayout>
        <TitleItem
          dataUserReport={dataUserInprogress}
          setDataUserReport={setDataUserInprogress}
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
