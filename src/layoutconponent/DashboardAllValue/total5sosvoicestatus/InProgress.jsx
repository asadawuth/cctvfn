import HeaderMainMessage from "../../HeaderMainMessage";
import BigLayout from "../../Forsosmobile/BigLayout";
import Item from "../../Forsosmobile/Item";
import Patination from "../../../layoutconponent/Patination";
import { useEffect, useState } from "react";
import axios from "../../../logic/config/axios";
export default function InProgress() {
  const [dataSosInprogress, setDataSosInprogress] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    axios
      .get(`/voicesos/alldatasosvoicestatusinprogress?_page=${currentPage}`)
      .then((res) => {
        setDataSosInprogress(res.data.allData);
        setTotalPages(res.data.totalPages);
      });
  }, [currentPage]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <HeaderMainMessage text={"ข้อมูลแสดง SOS สถานะกำลังดำเนินการ"} />
      <BigLayout>
        <Item data={dataSosInprogress} />
      </BigLayout>
      <Patination
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      <br />
    </>
  );
}
