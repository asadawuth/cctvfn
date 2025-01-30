import HeaderMainMessage from "../../layoutconponent/HeaderMainMessage";
import TitleItem from "../../layoutconponent/ForuserReport/TitleItem";
import { useState, useEffect } from "react";
import axios from "../../logic/config/axios";
import Patination from "../../layoutconponent/Patination";
import Biglayout from "../../layoutconponent/ForuserReport/ฺBiglayout";
import SearchdDataPersonReport from "../../layoutconponent/ForuserReport/SearchdDataPersonReport";
export default function UserReport() {
  const [dataUserReport, setDataUserReport] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [datapersonReport, setDatapersonReport] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textError, setTextError] = useState(false);

  useEffect(() => {
    axios
      .get(`/boardreport/reportslist?_page=${currentPage}`)
      .then((res) => {
        setDataUserReport(res.data.reportList);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  useEffect(() => {
    if (firstName && lastName) {
      axios
        .get(`/boardreport/datapersonpost/${firstName}/${lastName}`)
        .then((res) => {
          if (res.data && res.data.length > 0) {
            setDatapersonReport(res.data);
            setTextError(false);
          } else {
            setTextError(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setTextError(true);
        });
    }
  }, [firstName, lastName]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <HeaderMainMessage text={"หัวข้อร้องเรียนประชาชนในพื้นที่"} />
      <SearchdDataPersonReport
        setFirstName={setFirstName}
        setLastName={setLastName}
        textError={textError}
      />
      {datapersonReport.length === 0 || !datapersonReport ? (
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
      ) : (
        <Biglayout>
          <TitleItem
            dataUserReport={
              datapersonReport.length > 0 ? datapersonReport : dataUserReport
            }
            setDataUserReport={
              datapersonReport.length > 0
                ? setDatapersonReport
                : setDataUserReport
            }
          />
        </Biglayout>
      )}
    </>
  );
}
