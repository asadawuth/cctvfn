import { useEffect, useState } from "react";
import axios from "../../logic/config/axios";
import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import SearchdDataPersonReport from "../../layoutcomponent/ForuserReport/SearchdDataPersonReport";
import BigLayout from "../../layoutcomponent/Aboutemployee&&population/BigLayout";
import Item from "../../layoutcomponent/Aboutemployee&&population/Item";
import ItemSearch from "../../layoutcomponent/Aboutemployee&&population/ItemSearch";
import Patination from "../../layoutcomponent/Patination";
import { useTranslation } from "react-i18next";

export default function ListDataEmployee() {
  const { t } = useTranslation();
  const [dataListEmployee, setDataListEmployee] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [dataIdUserPersonSearch, setDataUserPersonSearch] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textError, setTextError] = useState(false);

  useEffect(() => {
    axios
      .get(`/user/data-employee?_page=${currentPage}`)
      .then((res) => {
        setDataListEmployee(res.data.data);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (firstName && lastName) {
      axios
        .get(`/user/data-userId/${firstName}/${lastName}`)
        .then((res) => {
          const userData = res.data?.dataIdUser;
          if (userData && Object.keys(userData).length > 0) {
            setDataUserPersonSearch(userData); // ไม่ต้องห่อด้วย [userData]
            setTextError(false);
          } else {
            setDataUserPersonSearch(null); // ถ้าไม่มีข้อมูลให้เซ็ตเป็น null
            setTextError(true);
          }
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setDataUserPersonSearch(null);
          setTextError(true);
        });
    } else {
      setDataUserPersonSearch(null);
    }
  }, [firstName, lastName]);

  return (
    <>
      <HeaderMainMessage text={t("inconponentListDataEmployee")} />
      <SearchdDataPersonReport
        setFirstName={setFirstName}
        setLastName={setLastName}
        textError={textError}
      />

      {!dataIdUserPersonSearch ? (
        <>
          <BigLayout>
            <Item dataListEmployee={dataListEmployee} />
          </BigLayout>
          <br />
          <Patination
            handlePageChange={handlePageChange}
            totalPages={totalPages}
            currentPage={currentPage}
          />
          <br />
        </>
      ) : (
        <>
          <ItemSearch dataIdUserPersonSearch={dataIdUserPersonSearch} />
        </>
      )}
    </>
  );
}
