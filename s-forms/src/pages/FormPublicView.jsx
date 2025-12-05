import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function FormPublicView() {
    const { form_slug } = useParams();
    const [form, setForm] = useState(null);
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        async function fetchForm() {
            try {
                const res = await fetch(`https://api-sforms.onrender.com/forms/${form_slug}`);
                const data = await res.json();
                setForm(data);
            } catch (err) {
                console.error("Error fetching form:", err);
            }
        }

        fetchForm();
    }, [form_slug]);

    const handleSubmit = async () => {
        const payload = {
            form_slug,
            response: answer,
        };

        await fetch(`https://api-sforms.onrender.com/forms/submit-response`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        alert("Response submitted successfully!");
        setAnswer("");
    };

    if (!form) return <div className="text-white p-10">Loading form...</div>;

return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center justify-center px-6 relative">
        {/* CONTAINER */}
        <div className="w-full max-w-2xl mx-auto">
            {/* TITLE */}
            <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-center">
                {form.form_name}
            </h1>
            {/* QUESTION */}
            <p className="text-gray-300 text-2xl mb-6 text-center">
                {form.questions[0].label}
            </p>
            {/* INPUT */}
            <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer..."
                className="w-full p-4 text-white text-xl rounded-xl bg-gray-900 
                    border-2 border-gray-700 
                    placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                    transition-all mb-6"/>
            {/* BUTTON */}
            <button
                onClick={handleSubmit}
                className="w-full bg-white hover:bg-gray-200 text-black text-xl font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-white/30"
            >
                Submit Response
            </button>
        </div>
        {/* Made with snippet logo box */}
        <div className="fixed bottom-4 right-4 bg-white bg-opacity-90 rounded-lg shadow-lg flex items-center px-3 py-2 text-xs font-semibold text-gray-700 z-50">
            <span className="mr-2">made with snippet</span>
            <img src="/src/assets/Snippet_logo.png" alt="Snippet logo" className="h-6 w-auto" />
        </div>
    </div>
);
}