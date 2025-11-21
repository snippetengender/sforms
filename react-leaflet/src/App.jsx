import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// A component to handle map events and pass data back to App.jsx
function MapEvents({ onLocationChange, coords }) {
  const map = useMap();

  useEffect(() => {
    const updatePosition = () => {
      const center = map.getCenter();
      // Only update if the center has changed
      if (center.lat !== coords.lat || center.lng !== coords.lng) {
        onLocationChange({ lat: center.lat, lng: center.lng });
      }
    };

    map.on("moveend", updatePosition);
    updatePosition(); // Set initial position

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
    setCoords(pos);  // Update the map's center when moved
  };

  const handleSaveLocation = () => {
    if (coords.lat && coords.lng && locationName) {
      const newLocation = {
        name: locationName,
        lat: coords.lat,
        lng: coords.lng,
      };
      setSavedLocations([...savedLocations, newLocation]);
      setLocationName(""); // Clear input after saving
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

          {/* Add MapEvents component to listen for moveend and update location */}
          <MapEvents onLocationChange={handleLocationChange} coords={coords} />

          {/* Add markers for saved locations */}
          {savedLocations.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lng]}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Center Pin */}
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

      {/* Location Input and Save Button */}
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
