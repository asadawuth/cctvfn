import { useState } from "react";
import CardData from "../CardData/CardData";

export default function Marker({ id, lat, lng }) {
  const [cardData, setCardData] = useState(false);

  const toggleCardData = () => {
    setCardData(!cardData);
  };
  return (
    <>
      <div
        onClick={toggleCardData}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "rgba(0, 123, 255, 0.7)",
          color: "white",
          fontWeight: "bold",
          fontSize: "14px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <a
          className="hover:tw-cursor-pointer"
          // Uncomment the lines below if needed
          // href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
          // target="_blank"
          // rel="noopener noreferrer"
        >
          {id}
        </a>
      </div>
      {cardData && (
        <CardData
          id={id}
          lat={lat}
          lng={lng}
          toggleCardData={toggleCardData}
          onClose={() => setCardData(false)}
        />
      )}
    </>
  );
}
