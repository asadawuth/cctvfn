import HeaderMainMessage from "../../HeaderMainMessage";
import BigLayout from "../../Forsosmobile/BigLayout";
import Item from "../../Forsosmobile/Item";
import Patination from "../../../layoutconponent/Patination";
import { useEffect, useState } from "react";
import axios from "../../../logic/config/axios";

export default function Acknowledged() {
  const [dataSosAcknowledged, setDataSosAcknowledged] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    axios
      .get(
        `/voicesos/alldatasosvoicestatusacknowledgedonly?_page=${currentPage}`
      )
      .then((res) => {
        setDataSosAcknowledged(res.data.allData);
        setTotalPages(res.data.totalPages);
      });
  }, [currentPage]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <HeaderMainMessage text={"ข้อมูลแสดง SOS สถานะรับแจ้ง"} />
      <BigLayout>
        <Item data={dataSosAcknowledged} />
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
