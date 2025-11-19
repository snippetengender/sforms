import { useNavigate } from "react-router-dom"
import HeaderSForms from "../components/HeaderSForms"

export default function CreateSForm(){
    const navigate = useNavigate();
    return (
    <>
        <section className="bg-black min-h-screen">
        <div>
            <br></br>
            <HeaderSForms/>
            <img src="src/assets/Snippy_butler.png" alt="Butler Snippy" className="my-10 md:my-15 mx-auto h-70 md:h-100"/>
            <p className="text-white  text-center text-2xl m-10 ">
                The simplest way to create forms with 
                <span className="font-bold"> payment gateway </span> and 
                <span className="font-bold"> QR </span> is 
                <span className="font-bold text-pink-500"> SForms</span>
            </p>            
            <button onClick={() => navigate("/create-snippet-forms")} className="text-xl text-white bg-blue-400 mx-auto block px-10 py-3 rounded-2xl font-medium hover:bg-pink-500 transition" >
                create a free form    
            </button>
        </div>
        </section>
    </>
    );
}