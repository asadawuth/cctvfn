import HeaderMainMessage from "../../HeaderMainMessage";
import Layout1Button from "./Layout1Button";
import Layout2DataShop from "./Layout2DataShop";
import Layout3CommentInIdShop from "./Layout3CommentInIdShop";
import Loading from "../../Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../logic/config/axios";

export default function AllDataShop() {
  const { shopId } = useParams();
  const [datashop, setDataShop] = useState(null);
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShopIdData = async () => {
      try {
        const numericShopId = Number(shopId);
        const response = await axios.get(
          `/aboutshop/alldatausershopid/${numericShopId}`
        );
        setDataShop(response.data);
      } catch (error) {
        console.error("Error fetching shopId data", error);
      } finally {
        setLoading(false);
      }
    };
    if (shopId) fetchShopIdData();
  }, [shopId]);

  useEffect(() => {
    const fetchCommentData = async () => {
      try {
        const response = await axios.get(
          `/commentsshop/datalistinshopid/${shopId}`
        );
        setComment(response.data);
      } catch (error) {
        console.error("Error fetching comment data:", error);
      }
    };
    if (shopId) fetchCommentData();
  }, [shopId]);

  const fetchCommentData = async () => {
    try {
      const response = await axios.get(
        `/commentsshop/datalistinshopid/${shopId}`
      );
      setComment(response.data);
    } catch (error) {
      console.error("Error fetching comment data:", error);
    }
  };
  const handlePostComment = async (data) => {
    try {
      await axios.post(`/commentsshop/createcomment/${shopId}`, data);
      await fetchCommentData();
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };
  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const res = await axios.patch(`/aboutshop/changestatusshopid/${id}`, {
        status: newStatus,
      });
      if (res.status === 200) {
        setDataShop((prevData) => ({ ...prevData, status: newStatus }));
      }
    } catch (error) {
      console.error("Error updating status:", error);
      throw new Error("Failed to update status");
    }
  };
  const handleDeleteCommentId = async (datashopId, commentId) => {
    try {
      await axios.delete(
        `/commentsshop/deletecommentid/${datashopId}/${commentId}`
      );
      setComment((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
    } catch (error) {
      console.error("Error deleting comment:", error.response || error.message);
    }
  };

  return (
    <>
      <HeaderMainMessage text="ข้อมูลร้านค้า/สถานที่/ที่พัก/ที่เที่ยวต่างๆของประชาชนในพื้นที่" />
      <Layout1Button handlePostComment={handlePostComment} />
      {loading ? (
        <Loading />
      ) : datashop ? (
        <>
          <Layout2DataShop
            datashop={datashop}
            shopId={shopId}
            handleUpdateStatus={handleUpdateStatus}
          />
          <HeaderMainMessage text="Review" />
          <Layout3CommentInIdShop
            comment={comment || []}
            shopId={shopId}
            handleDeleteCommentId={handleDeleteCommentId}
            fetchCommentData={fetchCommentData}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
}
