import { useNavigate } from "react-router-dom";

export default function HeaderSForms() {
  const navigate = useNavigate();

  return (
    <div className="text-white mt-2 p-4 flex justify-between items-center border-t-2 border-b-2 border-gray-800">

      <div 
        className="cursor-pointer font-bold text-2xl text-left px-4"
        onClick={() => navigate("/")}
      >
        <img
          src="src/assets/Snippet_logo.png"
          alt="Snippet"
          className="h-10"
        />
      </div>

      <div className="flex gap-2 text-white">
        <button
          onClick={() => navigate("/google-sign-in")}
          className="px-3 py-2 cursor-pointer font-bold text-gray-500 hover:text-white"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
