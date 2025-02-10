import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CardData({ id, lat, lng, onClose }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const socket = new WebSocket(`wss://mass-serv.ddns.net:1412/ws/data/${id}`);
    socket.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data);
        setData(parsedData);
      } catch (error) {
        // console.error("Error parsing data:", error);
      }
    };
    socket.onerror = (error) => {
      // console.error("WebSocket error:", error);
    };
    return () => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    };
  }, [id]);

  if (!data) {
    return <div>กำลังโหลดข้อมูล...</div>;
  }
  // console.log(data);
  return (
    <div className="tw-fixed tw-top-2  tw-w-64 tw-p-4 tw-rounded-lg tw-bg-white tw-shadow-md tw-z-[100]">
      <h3 className="tw-text-lg tw-font-bold tw-mb-2.5 tw-text-blue-500">
        ข้อมูลเซนเซอร์
      </h3>
      <ul className="tw-m-0 tw-p-0 tw-list-none">
        <li>เสาที่: {id}</li>
        <li>อุณหภูมิ: {data.temperature}</li>
        <li>ความชื้น: {data.humidity}</li>
        <li>ค่าฝุ่น: {data.pm2p5}</li>
        <li>ความสว่าง: {data.illumination}</li>
        <li>แรงดันไฟฟ้า: {data.voltage}</li>
        <li>กระแสไฟฟ้า: {data.current}</li>
        <li>กำลังไฟฟ้า: {data.power}</li>
        <li>ความถี่: {data.freq}</li>
        <li>
          <Link
            to={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="tw-text-blue-500"
          >
            นำทาง
          </Link>
        </li>
      </ul>
      <button
        onClick={onClose}
        className="tw-mt-2.5 tw-px-4 tw-py-2 tw-rounded tw-bg-red-500 tw-text-white tw-cursor-pointer hover:tw-bg-red-600 focus:tw-outline-none"
      >
        ปิด
      </button>
    </div>
  );
}
