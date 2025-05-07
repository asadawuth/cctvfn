import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import TitleItem from "../../layoutcomponent/ForuserReport/TitleItem";
import { useState, useEffect } from "react";
import axios from "../../logic/config/axios";
import Patination from "../../layoutcomponent/Patination";
import Biglayout from "../../layoutcomponent/ForuserReport/ฺBiglayout";
import SearchdDataPersonReport from "../../layoutcomponent/ForuserReport/SearchdDataPersonReport";
import { useTranslation } from "react-i18next";

export default function UserReport() {
  const { t } = useTranslation();
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

  console.log(dataUserReport);
  return (
    <>
      <HeaderMainMessage text={t("inconponentUserReport")} />
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
