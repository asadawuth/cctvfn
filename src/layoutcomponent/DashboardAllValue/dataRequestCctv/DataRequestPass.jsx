import HeaderMainMessage from "../../HeaderMainMessage";
import BigLayoutForStatusPass from "../../ForuserRequestForWatchcctv/BigLayoutForStatusPass";
import ItemForStatusPass from "../../ForuserRequestForWatchcctv/ItemForStatusPass";
import SearchdDataPersonReport from "../../../layoutcomponent/ForuserReport/SearchdDataPersonReport";

import Patination from "../../Patination";
import { useState, useEffect } from "react";
import axios from "../../../logic/config/axios";

export default function DataRequestPass() {
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
      .get(`/documentsrequestcctv/listpass?_page=${currentPage}`)
      .then((res) => {
        setDataUserRequestForWatchCctv(res.data.dataRequestPassOnly);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  useEffect(() => {
    if (firstName && lastName) {
      axios
        .get(`/documentsrequestcctv/datapassonly/${firstName}/${lastName}`)
        .then((res) => {
          if (res.data && res.data.dataPersonRequest.length > 0) {
            setPersonRequestForWatchcctv(res.data.dataPersonRequest);
            setTextError(false);
          } else {
            setPersonRequestForWatchcctv([]);
            setTextError(true);
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

  console.log(dataPersonRequestForWatchcctv);
  return (
    <>
      <HeaderMainMessage text="ข้อมูลประชาชนขออนุมัติดูกล้องผ่าน" />
      <SearchdDataPersonReport
        setFirstName={setFirstName}
        setLastName={setLastName}
        textError={textError}
      />
      {dataPersonRequestForWatchcctv.length > 0 ? (
        <BigLayoutForStatusPass>
          <ItemForStatusPass
            dataUserRequestForWatchCctv={dataPersonRequestForWatchcctv}
          />
        </BigLayoutForStatusPass>
      ) : (
        <>
          <BigLayoutForStatusPass>
            <ItemForStatusPass
              dataUserRequestForWatchCctv={dataUserRequestForWatchCctv}
            />
          </BigLayoutForStatusPass>
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
