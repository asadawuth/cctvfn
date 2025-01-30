import HeaderMainMessage from "../../HeaderMainMessage";
import { useState, useEffect } from "react";
import axios from "../../../logic/config/axios";
import BigLayout from "./layoutforstatus/BigLayout";
import Item from "./layoutforstatus/Item";
import Patination from "../../Patination";
export default function CheckingData() {
  const [dataStatus, setDataStatus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(`/aboutshop/datastatuschecking?_page=${currentPage}`)
      .then((res) => {
        setDataStatus(res.data.shopList);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <HeaderMainMessage text={"ข้อมูลแสดงขั่นตอนตรวจเอกสารประชาชนในพื้นที่"} />
      <BigLayout>
        <Item dataStatus={dataStatus} />
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
