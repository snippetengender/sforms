import { useState } from 'react';
import { QrReader } from "@blackbox-vision/react-qr-reader";


export default function Qrscanner(){

    const [scanResult, setScanResult ] = useState("");

    return(
    <div className="bg-black min-h-screen w-full overflow-x-hidden" >

        <br/>
        <div className="text-white mt-2 p-4 flex justify-between items-center 
                        border-t-2 border-b-2 border-gray-800">
            <h1 className="text-2xl font-semibold">QR Scanner</h1>
        </div>
        <br/>
        <div className="text-2xl h-[400px] text-white p-50 bg-gray-900 flex justify-center items-center border-b-2 border-gray-700">
            <QrReader
                onResult={(result, error) => {
                    if (!!result) {
                        setScanResult(result?.text)
                    }

                    if (!!error){
                        console.log(error);
                    }
                }}
                constraints={{ facingMode: "environment"}}
                style={{width: "100%", height: "100%"}}
            />
        </div>

        {scanResult && (
            <div className="text-white text-center mt-4">
                <h2 className="text-xl">Scanned message: </h2>
                <p>{scanResult}</p>
            </div>
        )}
        
    </div>
    );
}