import HeaderMainMessage from "../../../layoutcomponent/HeaderMainMessage";
import BigLayout from "./BigLayout";
import Item from "./Item";
import { useState, useEffect } from "react";
export default function Pole250() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("wss://mass-serv.ddns.net:1412/ws/data");
    socket.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data);
        setData((prevData) => [...prevData, parsedData]);
      } catch (error) {
        // console.error("Error parsing WebSocket message:", error);
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
  }, []);

  // console.log(data);

  return (
    <>
      <HeaderMainMessage text={"ค่าของเสาแต่ละเสา"} />
      <BigLayout>
        <Item data={data} />
      </BigLayout>
    </>
  );
}
