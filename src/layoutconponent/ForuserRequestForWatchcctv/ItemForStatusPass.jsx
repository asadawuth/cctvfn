import { useState } from "react";
import formatTimeAgo from "../../logic/utils/time-ago";
import ModelForOpenShowDocument from "../Model/forflow/ModelForOpenShowDocument";

export default function ItemForStatusPass({ dataUserRequestForWatchCctv }) {
  const [isModelOpenDocument, setModelOpenDocument] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const toggleModelShowDocument = (image) => {
    setModalImage(image);
    setModelOpenDocument(true);
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
              คลิกเพื่อตรวจสอบ
            </button>
          </td>
          <td className="tw-py-2 tw-px-4">
            {new Date(item.createdAt).toLocaleDateString()}
            &nbsp;&nbsp;เวลา&nbsp;&nbsp;
            {formatTimeAgo(item.createdAt)}
          </td>
          <td className="tw-py-2 tw-px-4">{item.point}</td>
          <td className="tw-py-2 tw-px-4 hover:tw-cursor-pointer tw-text-center tw-bg-blue-500 tw-text-white tw-transition-all tw-duration-300 hover:tw-bg-blue-600 hover:tw-scale-105 hover:tw-shadow-lg">
            {item.status}
          </td>
        </tr>
      ))}

      {/* Modal แสดงรูป */}
      <ModelForOpenShowDocument
        isOpen={isModelOpenDocument}
        onClose={() => {
          setModelOpenDocument(false);
        }}
        image={modalImage}
        alt="showdocument"
      />
    </>
  );
}
