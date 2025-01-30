import GoogleMapReact from "google-map-react";
import Marker from "../ForPointMap/marker/Marker";
export default function PointMapLayout2({ data, searchId }) {
  const filteredData = searchId
    ? data.filter((marker) => marker.id === searchId)
    : data;

  return (
    <>
      <div style={{ height: "664px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_KEY }}
          defaultCenter={{
            lat:
              filteredData.length > 0
                ? filteredData[0].position.lat
                : 13.6621014,
            lng:
              filteredData.length > 0
                ? filteredData[0].position.lng
                : 100.7141618,
          }}
          defaultZoom={13}
        >
          {filteredData.map((marker) => (
            <Marker
              key={marker.id}
              lat={marker.position.lat}
              lng={marker.position.lng}
              id={marker.id}
            />
          ))}
        </GoogleMapReact>
      </div>
    </>
  );
}
