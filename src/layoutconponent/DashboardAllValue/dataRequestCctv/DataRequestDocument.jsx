import HeaderMainMessage from "../../HeaderMainMessage";
import MessageManualForWatchcctv from "../../MessageManualForWatchcctv";
import BigLayout from "../../ForuserRequestForWatchcctv/BigLayout";
import Item from "../../ForuserRequestForWatchcctv/Item";
import Patination from "../../Patination";
import { useState, useEffect } from "react";
import axios from "../../../logic/config/axios";

export default function DataRequestDocument() {
  const [dataUserRequestForWatchCctv, setDataUserRequestForWatchCctv] =
    useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(`/documentsrequestcctv/listsenddocument?_page=${currentPage}`)
      .then((res) => {
        setDataUserRequestForWatchCctv(res.data.dataSendDocument);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <HeaderMainMessage text="ข้อมูลประชาชนยื่นเอกสารขอดูกล้อง" />
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
