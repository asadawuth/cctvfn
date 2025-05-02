import { useState } from "react";
import formatTimeAgo from "../../logic/utils/time-ago";
import Model from "../Model";
import ModelForOpenShowDocument from "../Model/forflow/ModelForOpenShowDocument";
import ModelForUpdateStatusUserRequestWatchcctv from "../Model/forflow/ModelForUpdateStatusUserRequestWatchcctv";
import ModelForSendMessageStatusCctpNotpass from "../Model/forflow/ModelForSendMessageStatusCctpNotpass";
import { useTranslation } from "react-i18next";

export default function Item({
  dataUserRequestForWatchCctv,
  setDataUserRequestForWatchCctv,
}) {
  const { t } = useTranslation();
  const [isModelOpenDocument, setModelOpenDocument] = useState(false);
  const [oldDataMessage, setOldDataMessage] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [isModelUpdateStatus, setIsModelUpdateStatus] = useState(false);
  const [isModelSendMessageCassNotpass, setIsModelSendMessageCassNotpass] =
    useState(false);
  const [selectId, setSelectId] = useState(null);

  const oldDataRemark = (id) => {
    setSelectId(id);
    const selectedItem = dataUserRequestForWatchCctv.find(
      (item) => item.id === id
    );
    if (selectedItem) {
      setOldDataMessage(selectedItem.remark || "");
    }
    setIsModelSendMessageCassNotpass(true);
  };

  const toggleModelShowDocument = (image) => {
    setModalImage(image);
    setModelOpenDocument(true);
  };

  const sendIdForUpdateStatus = (id) => {
    setSelectId(id);
    setIsModelUpdateStatus(true);
  };

  return (
    <>
      {dataUserRequestForWatchCctv.map((item, index) => (
        <tr className="tw-border-b" key={index}>
          <td className="tw-py-2 tw-px-4">{item.num}</td>
          <td className="tw-py-2 tw-px-4">{item.firstName}</td>
          <td className="tw-py-2 tw-px-4">{item.lastName}</td>
          <td className="tw-py-2 tw-px-4">{item.tel}</td>
          <td className="tw-py-2 tw-px-4">{item.nationalId}</td>
          <td className="tw-py-2 tw-px-4">{item.numDocument}</td>
          <td className="tw-py-2 tw-px-4">
            <button
              onClick={() => toggleModelShowDocument(item.image)}
              className="tw-bg-gray-500 tw-text-white tw-py-1 tw-px-4 tw-rounded-lg tw-transition-all hover:tw-bg-gray-600 hover:tw-shadow-lg tw-text-sm"
            >
              {t("Check")}
            </button>
          </td>
          <td className="tw-py-2 tw-px-4">
            {new Date(item.createdAt).toLocaleDateString()}
            &nbsp;&nbsp; {item.type}: {formatTimeAgo(item.time)}
            &nbsp;&nbsp;
          </td>
          <td className="tw-py-2 tw-px-4">{item.point}</td>
          <td className="tw-py-2 tw-px-4 hover:tw-cursor-pointer tw-text-center">
            <button
              onClick={() => sendIdForUpdateStatus(item.id)}
              className={`tw-py-1 tw-px-4 tw-rounded-lg tw-transition-all tw-text-sm ${
                item.status === "ไม่ผ่าน"
                  ? "tw-bg-red-500 tw-text-white hover:tw-bg-red-600 hover:tw-shadow-lg"
                  : item.status === "ยื่นเอกสาร"
                  ? "tw-bg-blue-500 tw-text-white hover:tw-bg-blue-600 hover:tw-shadow-lg"
                  : "tw-bg-blue-800 tw-text-white hover:tw-bg-blue-700 hover:tw-shadow-lg"
              }`}
            >
              {item.status}
            </button>
          </td>
          <td className="tw-py-2 tw-px-4">
            <button
              onClick={() => oldDataRemark(item.id)}
              className={`${
                item.remark
                  ? "tw-bg-sky-500 hover:tw-bg-sky-600"
                  : "tw-bg-green-500 hover:tw-bg-green-600"
              } tw-text-white tw-py-1 tw-px-4 tw-rounded-lg tw-transition-all tw-shadow-md tw-text-sm`}
            >
              {item.remark
                ? t("textSendDocumenttext1")
                : t("textSendDocumenttext2")}
            </button>
          </td>
        </tr>
      ))}
      <ModelForOpenShowDocument
        isOpen={isModelOpenDocument}
        onClose={() => {
          setModelOpenDocument(false);
        }}
        image={modalImage}
        alt="showdocument"
      />
      <Model
        title={t("ModelForUpdateStatusUserRequestWatchcctvText1")}
        open={isModelUpdateStatus}
        onClose={() => setIsModelUpdateStatus(false)}
      >
        <ModelForUpdateStatusUserRequestWatchcctv
          id={selectId}
          onClose={() => setIsModelUpdateStatus(false)}
          setDataUserRequestForWatchCctv={setDataUserRequestForWatchCctv}
        />
      </Model>
      <Model
        title={t("ModelForSendMessageStatusCctpNotpassText1")}
        open={isModelSendMessageCassNotpass}
        onClose={() => setIsModelSendMessageCassNotpass(false)}
      >
        <ModelForSendMessageStatusCctpNotpass
          id={selectId}
          onClose={() => setIsModelSendMessageCassNotpass(false)}
          setDataUserRequestForWatchCctv={setDataUserRequestForWatchCctv}
          oldMessage={oldDataMessage}
        />
      </Model>
    </>
  );
}
