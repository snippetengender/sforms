import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SFormView() {
    const { formslug } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState(null);
    const [loading, setLoading] = useState(true);
    const [responses, setResponses] = useState([]);

    const formLink = `http://api-sforms.onrender.com/forms/${formslug}`;

useEffect(() => {
    const savedForms = JSON.parse(localStorage.getItem("form_list")) || [];
    const found = savedForms.find(item => item.form_slug === formslug);

    setForm(found);

    fetch(`http://api-sforms.onrender.com/forms/${formslug}/responses`)
        .then(res => res.json())
        .then(data => {
            setResponses(data.responses || []);
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
}, [formslug]);

    if (loading) {
        return (
            <div className="bg-black text-white min-h-screen p-10">
                <h1 className="text-2xl">Loading...</h1>
            </div>
        );
    }

    if (!form) {
        return (
            <div className="bg-black text-white min-h-screen p-10">
                <h1 className="text-2xl">Form not found.</h1>
            </div>
        );
    }

    const handleGoHome = () => navigate("/sforms-home");

    return (
  <div className="bg-black min-h-screen w-full text-white p-10">
      <button 
        onClick={handleGoHome}
        className="mb-6 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition"
      >
        ← Back to Home
      </button>
      
      <h1 className="text-4xl font-bold mb-2">{form.form_title}</h1>

      <p className="text-gray-500 mb-8 text-sm">
        Created: {form.created_at}
      </p>

      <div className="mb-10 p-6 bg-gray-900 rounded-lg border border-gray-800">
            <p className="text-gray-300 text-sm mb-4">Share this form:</p>
            <button onClick={() => {
        navigator.clipboard.writeText(formLink);
        alert("Link copied to clipboard!");
    }}
    className="text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg font-medium text-gray-200 transition">Copy form link</button>
        </div>

      <div className="mb-10">
      <h2 className="text-xl font-semibold mb-3 text-gray-100">
        {form.form_question}
      </h2>

      <p className="text-gray-400">
        {form.form_answer}
      </p>
      </div>

      <div className="border-t border-gray-800 pt-8">
  <h2 className="text-lg font-semibold mb-6 text-gray-100">
    Responses <span className="text-gray-500 font-normal">({responses.length})</span>
  </h2>

  {responses.length === 0 ? (
    <p className="text-gray-600 text-sm">No responses yet.</p>
  ) : (
    <div className="space-y-3">
      {responses.map((resp, index) => (
        <div
          key={index}
          className="bg-gray-950 border border-gray-800 rounded-lg p-4"
        >
          <p className="text-gray-200 text-sm">
            {resp.response || "—"}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {resp.submitted_at || "unknown"}
          </p>
        </div>
      ))}
    </div>
    )}
  </div>

</div>
);}