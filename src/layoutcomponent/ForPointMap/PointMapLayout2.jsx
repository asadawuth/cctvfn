import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function PointMapLayout2({ data, searchId }) {
  const defaultCenter =
    data?.length > 0
      ? [parseFloat(data[0].lat), parseFloat(data[0].long)]
      : [13.6621014, 100.7141111]; // fallback center

  return (
    <div style={{ height: "660px", width: "100%" }}>
      <MapContainer
        center={defaultCenter}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {Array.isArray(data) &&
          data.map((item, index) => {
            const lat = parseFloat(item.lat);
            const lng = parseFloat(item.long);

            if (isNaN(lat) || isNaN(lng)) return null;

            return (
              <CircleMarker
                key={index}
                center={[lat, lng]}
                radius={10}
                pathOptions={{
                  color: "#3B82F6",
                  fillColor: "#3B82F6",
                  fillOpacity: 0.7,
                }}
              >
                <Popup>
                  <div>
                    <div>ชื่อ: {item.name_device}</div>
                    <div>ตำแหน่ง: {item.name_map}</div>
                  </div>
                </Popup>
              </CircleMarker>
            );
          })}
      </MapContainer>
    </div>
  );
}
