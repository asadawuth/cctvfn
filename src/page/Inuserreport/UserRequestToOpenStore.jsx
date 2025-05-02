import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import Patination from "../../layoutcomponent/Patination";
import Biglayout from "../../layoutcomponent/Forusershop/Biglayout";
import UserShopItem from "../../layoutcomponent/Forusershop/UserShopItem";
import SearchdDataPersonReport from "../../layoutcomponent/ForuserReport/SearchdDataPersonReport";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import axios from "../../logic/config/axios";

export default function UserRequestToOpenStore() {
  const { t } = useTranslation();
  const [dataUserShop, setDataUserShop] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [datapersonShop, setDatapersonShop] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textError, setTextError] = useState(false);

  useEffect(() => {
    axios
      .get(`/aboutshop/shoplist?_page=${currentPage}`)
      .then((res) => {
        setDataUserShop(res.data.shopList || []);
        setTotalPages(res.data.totalPages || 0);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  useEffect(() => {
    if (firstName && lastName) {
      axios
        .get(`/aboutshop/datapersonshoppost/${firstName}/${lastName}`)
        .then((res) => {
          if (res.data && res.data.length > 0) {
            setDatapersonShop(res.data);
            setTextError(false);
          } else {
            setDatapersonShop([]);
            setTextError(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setDatapersonShop([]);
          setTextError(true);
        });
    } else {
      setDatapersonShop([]);
    }
  }, [firstName, lastName]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const res = await axios.patch(`/aboutshop/changestatusshopid/${id}`, {
        status: newStatus,
      });
      if (res.status === 200) {
        setDataUserShop((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, status: newStatus } : item
          )
        );
        setDatapersonShop((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, status: newStatus } : item
          )
        );
      }
    } catch (error) {
      console.error("Error updating status:", error);
      throw new Error("Failed to update status");
    }
  };

  const handleDeleteShopId = async (datashopId) => {
    try {
      await axios.delete(`/aboutshop/deletepostshopid/${datashopId}`);
      setDataUserShop((prevData) => {
        const newData = prevData.filter((item) => item.id !== datashopId);

        if (newData.length === 0 && currentPage > 1) {
          setCurrentPage((prevPage) => prevPage - 1);
        }
        return newData;
      });
      const res = await axios.get(`/aboutshop/shoplist?_page=${currentPage}`);
      setDataUserShop(res.data.shopList || []);
      setTotalPages(res.data.totalPages || 0);
    } catch (error) {
      console.error("Error deleting shop ID:", error.response || error.message);
    }
  };

  return (
    <>
      <HeaderMainMessage text={t("inconponentUserRequestToOpenStore")} />
      <SearchdDataPersonReport
        setFirstName={setFirstName}
        setLastName={setLastName}
        textError={textError}
      />
      {!Array.isArray(dataUserShop) || dataUserShop.length === 0 ? (
        <div style={{ height: "80px" }}></div>
      ) : (
        <>
          {Array.isArray(datapersonShop) && datapersonShop.length > 0 ? (
            <Biglayout>
              <UserShopItem
                handleDeleteShopId={handleDeleteShopId}
                dataUserShop={datapersonShop}
                setDataUserShop={setDatapersonShop}
                handleUpdateStatus={handleUpdateStatus}
              />
            </Biglayout>
          ) : (
            <>
              <Biglayout>
                <UserShopItem
                  handleDeleteShopId={handleDeleteShopId}
                  dataUserShop={dataUserShop}
                  setDataUserShop={setDataUserShop}
                  handleUpdateStatus={handleUpdateStatus}
                />
              </Biglayout>
              <Patination
                handlePageChange={handlePageChange}
                totalPages={totalPages}
                currentPage={currentPage}
              />
              <br />
            </>
          )}
        </>
      )}
    </>
  );
}
