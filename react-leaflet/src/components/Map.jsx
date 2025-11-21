import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";

// Fix default Leaflet marker icons (Vite needs this)
import "leaflet/dist/leaflet.css";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
});

function ClickMarker({ setPosition }) {
  useMapEvents({
    click(e) {
      console.log("Lat:", e.latlng.lat, "Lng:", e.latlng.lng);
      setPosition(e.latlng); // update marker position
    }
  });

  return null;
}

export default function MyMap() {
  const [position, setPosition] = useState(null);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <ClickMarker setPosition={setPosition} />

      {position && <Marker position={position} />}
    </MapContainer>
  );
}
