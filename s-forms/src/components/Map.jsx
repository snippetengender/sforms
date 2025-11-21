import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function MapEvents({ onLocationChange }) {
  const map = useMap();

  useEffect(() => {
    const updatePosition = () => {
      const center = map.getCenter();
      onLocationChange({
        lat: center.lat,
        lng: center.lng,
      });
    };

    map.on("moveend", updatePosition);
    updatePosition(); // initial run

    return () => map.off("moveend", updatePosition);
  }, [map]);

  return null;
}

export default function MyMap({ onLocationChange }) {
  return (
    <div className="relative h-[50vh] w-full">
      {/* Center Pin */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <img
          src="https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png"
          alt="center-pin"
          className="w-8 h-8"
        />
      </div>

      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <MapEvents onLocationChange={onLocationChange} />
      </MapContainer>
    </div>
  );
}
