import { useState } from "react";
import MyMap from "./components/Map";

export default function App() {
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [locationName, setLocationName] = useState("");
  const [savedLocations, setSavedLocations] = useState([]);

  const handleLocationChange = (pos) => {
    console.log("Center changed:", pos);
    setCoords(pos);
  };

  const handleNameChange = (event) => {
    setLocationName(event.target.value);
  };

  const handleSaveLocation = () => {
    if (coords.lat && coords.lng && locationName) {
      const newLocation = {
        name: locationName,
        lat: coords.lat,
        lng: coords.lng,
      };
      setSavedLocations([...savedLocations, newLocation]);
      console.log("Saved Location:", newLocation);
      // Optionally, you can clear the location name after saving
      setLocationName("");
    } else {
      alert("Please select a location on the map and provide a name.");
    }
  };

  return (
    <div>
      <MyMap onLocationChange={handleLocationChange} />

      <div style={{ padding: 20 }}>
        <h3>Selected Location</h3>
        <p>Lat: {coords.lat}</p>
        <p>Lng: {coords.lng}</p>

        <div>
          <input
            type="text"
            value={locationName}
            onChange={handleNameChange}
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
                <strong>{location.name}</strong> (Lat: {location.lat}, Lng:{" "}
                {location.lng})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}