import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { useEffect } from "react";

function CenterMapOnMarker({ position }) {
  const map = useMap();

  useEffect(() => {
    map.setView(position);
  }, [map, position]);

  return null;
}

export default function Map() {
  if (typeof window === "undefined") {
    return null;
  }

  const position = [13.657668, 100.661151];

  return (
    <div className="tw-w-full tw-bg-slate-50 tw-hover:cursor-pointer tw-p-6">
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        className="tw-h-[360px] md:tw-h-[300px] sm:tw-h-[250px] xs:tw-h-[200px] tw-w-full"
      >
        <CenterMapOnMarker position={position} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
            >
              Masscorporation
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
