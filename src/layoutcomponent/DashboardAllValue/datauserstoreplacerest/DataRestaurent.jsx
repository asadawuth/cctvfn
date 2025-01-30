import HeaderMainMessage from "../../HeaderMainMessage";
import Patination from "../../../layoutcomponent/Patination";
import Biglayout from "../../Forusershop/Biglayout";
import UserShopItem from "../../../layoutcomponent/Forusershop/UserShopItem";
import { useState, useEffect } from "react";
import axios from "../../../logic/config/axios";
export default function DataRestaurent() {
  const [dataUserShop, setDataUserShop] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(`/aboutshop/datarestaurant?_page=${currentPage}`)
      .then((res) => {
        setDataUserShop(res.data.shopList || []);
        setTotalPages(res.data.totalPages || 0);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

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
      const res = await axios.get(
        `/aboutshop/datarestaurant?_page=${currentPage}`
      );
      setDataUserShop(res.data.shopList || []);
      setTotalPages(res.data.totalPages || 0);
    } catch (error) {
      console.error("Error deleting shop ID:", error.response || error.message);
    }
  };
  return (
    <>
      <HeaderMainMessage text={"ข้อมูลแสดงร้านอาหาร ณ ปัจจุบัน"} />
      <Biglayout>
        <UserShopItem
          dataUserShop={dataUserShop}
          handleUpdateStatus={handleUpdateStatus}
          handleDeleteShopId={handleDeleteShopId}
        />
      </Biglayout>
      <Patination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
      <br />
    </>
  );
}
