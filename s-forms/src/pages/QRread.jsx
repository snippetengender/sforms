import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

export default function QrScanner() {
  const [scanResult, setScanResult] = useState("");

  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden">
      <div className="text-white mt-2 p-4 flex justify-between items-center border-t-2 border-b-2 border-gray-800">
        <h1 className="text-2xl font-semibold">QR Scanner</h1>
      </div>

      <div className="h-[400px] mt-4 flex justify-center items-center bg-gray-900 border-b-2 border-gray-700">
        <Scanner
          constraints={{ facingMode: "environment" }}  // try rear camera
          onScan={(codes) => {
            if (codes && codes.length > 0) {
              // take first detected QR (rawValue contains text)
              setScanResult(codes[0].rawValue);
            }
          }}
          onError={(err) => {
            console.error("Scanner error:", err);
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {scanResult && (
        <div className="text-white text-center mt-4 p-4">
          <h2 className="text-xl">Scanned result:</h2>
          <p>{scanResult}</p>
        </div>
      )}
    </div>
  );
}
