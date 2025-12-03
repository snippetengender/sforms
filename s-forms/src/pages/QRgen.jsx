import { useState } from "react";
import { QRCode } from "react-qr-code";

export default function qrgenerator() {

    const [text, setText] = useState("");
    const [qrValue, setQrValue] = useState("");
    /* need to save the text in mongo db*/
    return(
    <div className="bg-black min-h-screen w-full overflow-x-hidden" >

        <br/>
        <div className="text-white mt-2 p-4 flex justify-between items-center 
                        border-t-2 border-b-2 border-gray-800">
            <h1 className="text-2xl font-semibold">QR Generator</h1>
        </div>
        <br/>

        <div className="border-b-2 border-b-gray-700 flex justify-center items-center h-[400px]">
            {qrValue ? (
                <div className="p-2 bg-white rounded">
                <QRCode value={qrValue} size={240} bgColor="#ffffff" fgColor="#000000"></QRCode>
                </div>
            ):(
                <h1 className="text-2xl text-white m-50">NO_QR</h1>
            )}
            
        </div>
        <br/>
        <div className="flex justify-center items-start text-2xl font-medium">
            <div className="flex flex-col gap-4 m-4">
                <h1 className="text-white ">Type some random text</h1>
                <input 
                    placeholder="Type something here" 
                    className="placeholder:text-2xl placeholder:text-gray-400 rounded-2xl border-2 border-gray-700 p-2 text-white"
                    onChange={(e) => setText(e.target.value)}
                    value={text}></input>
                <button 
                    onClick={() => setQrValue(text)}
                    className="bg-white text-black p-3 px- rounded-2xl">
                    Generate QR Code
                </button>
                <button className="bg-white text-black p-3 px- rounded-2xl">
                    Save to DB
                </button>
            </div>
        </div>
    </div>
    );
}