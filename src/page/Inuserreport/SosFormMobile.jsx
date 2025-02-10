import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import SearchDataPersonSos from "../../layoutcomponent/Forsosmobile/SearchDataPersonSos";
import BigLayout from "../../layoutcomponent/Forsosmobile/BigLayout";
import Item from "../../layoutcomponent/Forsosmobile/Item";
import Patination from "../../layoutcomponent/Patination";

import { useEffect, useState } from "react";
import axios from "../../logic/config/axios";
export default function SosFormMobile() {
  const [dataSos, setDataSos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  //
  const [datapersonReport, setDatapersonReport] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textError, setTextError] = useState(false);
  useEffect(() => {
    axios
      .get(`/voicesos/listalldatapaginationsosvoice?_page=${currentPage}`)
      .then((res) => {
        setDataSos(res.data.allData);
        setTotalPages(res.data.totalPages);
      });
  }, [currentPage]);
  useEffect(() => {
    if (firstName && lastName) {
      axios
        .get(`/voicesos/datapersonsospost/${firstName}/${lastName}`)
        .then((res) => {
          if (res.data && res.data.allDataPreson.length > 0) {
            setDatapersonReport(res.data.allDataPreson);
            setTextError(false);
          } else {
            setDatapersonReport([]);
            setTextError(true);
          }
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setDatapersonReport([]);
          setTextError(true);
        });
    } else {
      setDatapersonReport([]);
    }
  }, [firstName, lastName]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // console.log(dataSos);
  return (
    <>
      <HeaderMainMessage text={"SOS จาก โทรศัทพ์ประชาชนในพื้นที่หน่วยงาน"} />
      <SearchDataPersonSos
        setFirstName={setFirstName}
        setLastName={setLastName}
        textError={textError}
      />
      {datapersonReport.length > 0 ? (
        <BigLayout>
          <Item data={datapersonReport} setDataSos={setDatapersonReport} />
        </BigLayout>
      ) : (
        <>
          <BigLayout>
            <Item data={dataSos} setDataSos={setDataSos} />
          </BigLayout>
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
