import Header from "../components/Header";

import { useLocation } from "react-router-dom";


import { useNavigate } from "react-router-dom";
export default function SFormsDone(){

    const location = useLocation();
    const formSlug = location.state?.form_slug;

    // The link:
    const formLink = `http://localhost:5173/forms/${formSlug}`;
    
    const navigate = useNavigate();
    return(
        <div className="bg-black min-h-screen w-full overflow-x-hidden">
        <br/>
        <Header/>
        <br/>
        <button
            onClick={() => navigate("/sforms-home")}
            className="border-2 border-gray-800 text-1rem hover:bg-gray-900 text-gray-500 rounded-lg py-1 px-5 m-5">
            Sforms Home Page
        </button>
        
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-2xl my-10 font-bold text">Sforms created Successfully</h1>
            <button onClick={() => {
        navigator.clipboard.writeText(formLink);
        alert("Link copied to clipboard!");
    }}
    className="bg-blue-400 px-4 py-2 rounded-2xl font-semibold text-white">copy the link here</button>
        </div>
        
        <section className="text-left">
            <h1 className="text-2xl text-white font-semibold p-4 border-b-1 border-b-gray-500">Responses</h1>
            <h1 className="text-2xl text-white p-4">sample text</h1>
        </section>

        </div>
    );
}import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
export default function SFormsDone(){
    const navigate = useNavigate();
    return(
        <div className="bg-black min-h-screen w-full overflow-x-hidden">
        <br/>
        <Header/>
        <br/>
        <button
            onClick={() => navigate("/sforms-home")}
            className="border-2 border-gray-800 text-1rem hover:bg-gray-900 text-gray-500 rounded-lg py-1 px-5 m-5">
            Sforms Home Page
        </button>
        
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-2xl my-10 font-bold text">Sforms created Successfully</h1>
            <button className="bg-blue-400 px-4 py-2 rounded-2xl font-semibold text-white">copy from link here</button>
        </div>
        
        <section className="text-left">
            <h1 className="text-2xl text-white font-semibold p-4 border-b-1 border-b-gray-500">Responses</h1>
            <h1 className="text-2xl text-white p-4">sample text</h1>
        </section>

        </div>
    );
}