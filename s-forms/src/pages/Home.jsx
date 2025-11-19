import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
    <section className="bg-black ">
      <div className="text-left w-full max-w-md mx-auto min-h-screen flex flex-col justify-center px-6">
        <h1 className="text-white text-3xl sm:text-4xl font-bold mb-6 ">
          This is Snippet Home Page
        </h1>

        <button
          onClick={() => navigate("/create-snippet-forms")}
          className="bg-white text-black w-full py-4 rounded-2xl font-medium hover:bg-gray-200 transition"
        >
          Create Snippet Forms
        </button>
      </div>
    </section>
    </>
  );
}
