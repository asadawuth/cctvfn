import HeaderMainMessage from "../../HeaderMainMessage";
import MessageManualForWatchcctv from "../../MessageManualForWatchcctv";
import BigLayout from "../../ForuserRequestForWatchcctv/BigLayout";
import Item from "../../ForuserRequestForWatchcctv/Item";
import Patination from "../../Patination";
import { useState, useEffect } from "react";
import axios from "../../../logic/config/axios";

export default function DataRequestNotpass() {
  const [dataUserRequestForWatchCctv, setDataUserRequestForWatchCctv] =
    useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(`/documentsrequestcctv/listnotpass?_page=${currentPage}`)
      .then((res) => {
        setDataUserRequestForWatchCctv(res.data.dataNotPass);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <HeaderMainMessage text="ข้อมูลประชาชนที่ขออนุมัติดูกล้องไม่ผ่าน" />
      <MessageManualForWatchcctv />
      <BigLayout>
        <Item
          dataUserRequestForWatchCctv={dataUserRequestForWatchCctv}
          setDataUserRequestForWatchCctv={setDataUserRequestForWatchCctv}
        />
      </BigLayout>
      <br />
      <Patination
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      <br />
    </>
  );
}
