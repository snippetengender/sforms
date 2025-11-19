import { useNavigate } from "react-router-dom"
import HeaderSForms from "../components/HeaderSforms";

export default function CreateSForm(){
    const navigate = useNavigate();
    return (
        <div>
            <HeaderSForms/>
            <p>The Simplest way to create forms with payment gateway and QR is SForms</p>

            <button onClick={() => navigate("/create-snippet-forms")}>
                Create a Free Form    
            </button>
        </div>
    );
}
