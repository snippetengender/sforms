import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SFormView() {
    const { formslug } = useParams();
    const [form, setForm] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const list = JSON.parse(sessionStorage.getItem("form_list")) || [];

        const found = list.find(item => item.formslug == formslug);

        setForm(found);
        
        // Fetch responses from backend
        fetch(`http://localhost:8000/forms/${formslug}/responses`)
            .then(res => res.json())
            .then(data => {
                setResponses(data.responses || []);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching responses:", err);
                setLoading(false);
            });
        
        setLoading(false);
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

    return (
        <div className="bg-black text-white min-h-screen p-10">
            <h1 className="text-4xl font-bold mb-4">{form.form_title}</h1>

            <p className="text-gray-400 mb-6">
                Created: {form.created_at}
            </p>

            <h2 className="text-2xl font-semibold mb-2">
                {form.form_question}
            </h2>

            <p className="text-xl text-gray-300">
                {form.form_answer}
            </p>
        </div>
    );
}
