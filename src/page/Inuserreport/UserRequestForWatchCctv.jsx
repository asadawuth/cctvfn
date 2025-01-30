import HeaderMainMessage from "../../layoutconponent/HeaderMainMessage";
import MessageManualForWatchcctv from "../../layoutconponent/MessageManualForWatchcctv";
import SearchdDataPersonReport from "../../layoutconponent/ForuserReport/SearchdDataPersonReport";
import BigLayout from "../../layoutconponent/ForuserRequestForWatchcctv/BigLayout";
import Item from "../../layoutconponent/ForuserRequestForWatchcctv/Item";
import Patination from "../../layoutconponent/Patination";
import { useState, useEffect } from "react";
import axios from "../../logic/config/axios";

export default function UserRequestForWatchCctv() {
  const [dataUserRequestForWatchCctv, setDataUserRequestForWatchCctv] =
    useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [dataPersonRequestForWatchcctv, setPersonRequestForWatchcctv] =
    useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textError, setTextError] = useState(false);

  useEffect(() => {
    axios
      .get(`/documentsrequestcctv/listpaginationquestcctv?_page=${currentPage}`)
      .then((res) => {
        setDataUserRequestForWatchCctv(
          res.data.dataToSendDocumentAndNotpassPage
        );
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  useEffect(() => {
    if (firstName && lastName) {
      axios
        .get(`/documentsrequestcctv/datapersonrequest/${firstName}/${lastName}`)
        .then((res) => {
          if (res.data && res.data.dataPersonRequest.length > 0) {
            setPersonRequestForWatchcctv(res.data.dataPersonRequest);
            setTextError(false);
          } else {
            setPersonRequestForWatchcctv([]); // ล้างข้อมูลการค้นหา
            setTextError(true); // แสดงข้อความ error
          }
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setPersonRequestForWatchcctv([]);
          setTextError(true);
        });
    } else {
      setPersonRequestForWatchcctv([]);
    }
  }, [firstName, lastName]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <HeaderMainMessage
        text={"เช็คเอกสารประชาชนเพื่ออนุมัติกล้องให้ผู้แจ้ง"}
      />
      <MessageManualForWatchcctv />
      <SearchdDataPersonReport
        setFirstName={setFirstName}
        setLastName={setLastName}
        textError={textError}
      />

      {/* แสดงผลข้อมูลการค้นหา */}
      {dataPersonRequestForWatchcctv.length > 0 ? (
        <BigLayout>
          <Item
            dataUserRequestForWatchCctv={dataPersonRequestForWatchcctv}
            setDataUserRequestForWatchCctv={setPersonRequestForWatchcctv}
          />
        </BigLayout>
      ) : (
        <>
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
      )}
    </>
  );
}
