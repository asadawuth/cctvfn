import PointMapLayout1 from "../../layoutcomponent/ForPointMap/PointMapLayout1";
import DataRealtimePole from "../../layoutcomponent/ForPointMap/DataRealtimePole";
import PointMapLayout2 from "../../layoutcomponent/ForPointMap/PointMapLayout2";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PointMap() {
  const [data, setData] = useState([]);
  const [searchId, setSearchId] = useState(null);
  const [topicId, setTopicId] = useState(null);
  const [dataRealTime, setDataRealTime] = useState();

  useEffect(() => {
    if (!topicId) {
      setDataRealTime(null); // เคลียร์ค่าเมื่อไม่มี topic
      return;
    }

    console.log(`🟢 Connecting to topic: ${topicId}`);
    setDataRealTime(null); // เคลียร์ค่าทันทีเมื่อเปลี่ยน topic

    const mqttClient = new WebSocket(`ws://localhost:5001?topic=${topicId}`);

    mqttClient.onopen = () => {
      console.log("✅ WebSocket connected");
    };

    mqttClient.onmessage = (event) => {
      try {
        const parsed = JSON.parse(event.data);
        console.log("📨 Message received:", parsed);
        setDataRealTime(parsed);
      } catch (err) {
        console.error("❌ JSON parse error:", err);
      }
    };

    mqttClient.onerror = (error) => {
      console.error("❌ WebSocket error:", error);
    };

    mqttClient.onclose = () => {
      console.log(`🔴 WebSocket disconnected from topic: ${topicId}`);
    };

    return () => {
      console.log(`🧹 Cleaning up WebSocket for topic: ${topicId}`);
      mqttClient.close();
    };
  }, [topicId]);

  useEffect(() => {
    axios
      .get("https://api.teetest.shop/api/read_all_data")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (id) => {
    setSearchId(id);
  };

  return (
    <>
      <PointMapLayout1 onSearch={handleSearch} />
      <DataRealtimePole dataRealTime={dataRealTime} />
      <PointMapLayout2
        data={data}
        searchId={searchId}
        setTopicId={setTopicId}
      />
    </>
  );
}
