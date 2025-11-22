import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function MapEvents({ onLocationChange, coords }) {
  const map = useMap();

  useEffect(() => {
    const updatePosition = () => {
      const center = map.getCenter();
      if (center.lat !== coords.lat || center.lng !== coords.lng) {
        onLocationChange({ lat: center.lat, lng: center.lng });
      }
    };

    map.on("moveend", updatePosition);
    updatePosition();

    return () => {
      map.off("moveend", updatePosition);
    };
  }, [map, onLocationChange, coords]);

  return null;
}

export default function App() {
  const [coords, setCoords] = useState({ lat: 11.603863095371374, lng: 79.49707031250001 });
  const [locationName, setLocationName] = useState("");
  const [savedLocations, setSavedLocations] = useState([]);

  const handleLocationChange = (pos) => {
    setCoords(pos); 
  };

  const handleSaveLocation = () => {
    if (coords.lat && coords.lng && locationName) {
      const newLocation = {
        name: locationName,
        lat: coords.lat,
        lng: coords.lng,
      };
      setSavedLocations([...savedLocations, newLocation]);
      setLocationName(""); 
    } else {
      alert("Please select a location on the map and provide a name.");
    }
  };

  return (
    <div>
      <div style={{ position: "relative", height: "50vh", width: "100%" }}>
        <MapContainer
          center={[coords.lat, coords.lng]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          <MapEvents onLocationChange={handleLocationChange} coords={coords} />

          {savedLocations.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lng]}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -100%)",
            zIndex: 999,
            pointerEvents: "none",
          }}
        >
          <img
            src="https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png"
            alt="center-pin"
          />
        </div>
      </div>

      <div style={{ padding: 20 }}>
        <h3>Selected Location</h3>
        <p>Lat: {coords.lat}</p>
        <p>Lng: {coords.lng}</p>

        <div>
          <input
            type="text"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
            placeholder="Enter location name"
            style={{ marginRight: "10px" }}
          />
          <button onClick={handleSaveLocation}>Save Location</button>
        </div>

        <h3>Saved Locations</h3>
        {savedLocations.length === 0 ? (
          <p>No locations saved yet.</p>
        ) : (
          <ul>
            {savedLocations.map((location, index) => (
              <li key={index}>
                <strong>{location.name}</strong> (Lat: {location.lat}, Lng: {location.lng})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
