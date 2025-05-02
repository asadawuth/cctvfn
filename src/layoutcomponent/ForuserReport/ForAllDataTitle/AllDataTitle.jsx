import HeaderMainMessage from "../../HeaderMainMessage";
import ForUser from "../../ForUser";
import ForLogout from "../../ForLogout";
import Layout1Button from "./Layout1Button";
import Layout2AllTitle from "./Layout2AllTitle";
import Layout3CommentInTitle from "./Layout3CommentInTitle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../../logic/config/axios";
import Loading from "../../Loading";
import { useTranslation } from "react-i18next";

export default function AllDataTitle() {
  const { t } = useTranslation();
  const { reportId } = useParams();
  const [report, setReport] = useState(null);
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const numericReportId = Number(reportId);
        const response = await axios.get(
          `/boardreport/AllDataInComment/${numericReportId}`
        );
        setReport(response.data);
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    };
    fetchReportData();
  }, [reportId]);

  useEffect(() => {
    const fetchCommentData = async () => {
      try {
        const numericReportId = Number(reportId);
        const response = await axios.get(
          `/commentidreport/datalistincommentreportid/${numericReportId}`
        );
        setComment(response.data);
      } catch (error) {
        console.error("Error fetching comment data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommentData();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `/commentidreport/datalistincommentreportid/${reportId}`
      );
      setComment(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCreateCommentIdUserReportId = async (data) => {
    try {
      await axios.post(`/commentidreport/commentinreportid/${reportId}`, data);
      await fetchComments();
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  const handleDeleteCommentId = async (reportId, commentId) => {
    try {
      await axios.delete(
        `/commentidreport/deletecommentinuserreportid/${reportId}/${commentId}`
      );
      setComment(comment.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleEditStatusUserReportId = async (reportId, data) => {
    try {
      await axios.patch(`/boardreport/changestatusreport/${reportId}`, data);
      setReport((prevState) => ({ ...prevState, status: data.status }));
    } catch (error) {
      console.error("Error editing status:", error);
    }
  };

  return loading || !report ? (
    <Loading />
  ) : (
    <>
      <HeaderMainMessage text={t("titleInsizeUserReport")} />
      <ForUser />
      <ForLogout />
      <Layout1Button
        handleCreateCommentIdUserReportId={handleCreateCommentIdUserReportId}
      />
      <Layout2AllTitle
        report={report}
        handleEditStatusUserReportId={handleEditStatusUserReportId}
        reportId={reportId}
      />
      <Layout3CommentInTitle
        comment={comment}
        fetchComments={fetchComments}
        handleDeleteCommentId={handleDeleteCommentId}
        reportId={reportId}
      />
    </>
  );
}
