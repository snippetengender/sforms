import { useNavigate } from "react-router-dom"
import Header_PreviewPublish from "../components/Header_PreviewPublish"
export default function CreateSForm(){
    const navigate = useNavigate();
    return(
        <>
        <section className="bg-black min-h-screen">
            <br></br>
            <Header_PreviewPublish/>
            <button 
                onclick={() => navigate("/create-event-page")}
                className=" border-2 border-gray-800 text-1rem text-gray-500 rounded-lg py-1 px-5 m-5"> 
                    create an event page
            </button>
            <br></br>
            <textarea type="text" name="form_title" placeholder="Form title" className="text-4xl text-white placeholder-text-gray-400 font-bold m-7 h-64 resize-none focus:outline-none overflow-y-auto scrollbar-none" >
            </textarea>

            <button
                onlick={() => navigate("/google-sign-in")} name="form-submit" className= "bg-white text-black text-1rem font-medium py-1 px-6 ml-7 rounded-lg">
                Submit
            </button>
        </section>
        </>
    )

}