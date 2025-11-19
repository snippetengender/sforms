import { useNavigate } from "react-router-dom"
export default function Home(){
    const navigate = useNavigate();
    return (
        <div>
            <h1>This is Snippet Home Page</h1>

            <button onClick={() => navigate("/create-snippet-forms")}>
                Create Snippet Forms
            </button>
        </div>
    );
}