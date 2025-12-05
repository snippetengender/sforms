import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header_Publish from "../components/Header_Publish";

export default function CreateSForm() {
    const navigate = useNavigate();
    const username = localStorage.getItem("user_name");

    const [formTitle, setFormTitle] = useState("");
    const [formQuestion, setFormQuestion] = useState("");
    const [formAnswer, setFormAnswer] = useState("");

    useEffect(() => {
        const stored = sessionStorage.getItem("draft_form");
        if (stored) {
            const data = JSON.parse(stored);
            setFormTitle(data.form_title || "");
            setFormQuestion(data.form_question || "");
            setFormAnswer(data.form_answer || "");
        }
    }, []);

    const handleFormSubmit = async () => {
        const slugResponse = await fetch("https://api-sforms.onrender.com/forms/create-slug", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ form_title: formTitle })
        });

        const slugData = await slugResponse.json();
        const finalFormSlug = slugData.form_slug || slugData.slug;

        const payload = {
            created_by: username,
            form_slug: finalFormSlug,
            form_name: formTitle,
            questions: [
                {
                    id: "q1",
                    type: "text",
                    label: formQuestion,
                    required: true
                }
            ],
            status: "draft"
        };

        await fetch("https://api-sforms.onrender.com/forms", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const newForm = {
            form_title: formTitle,
            form_slug: finalFormSlug,
            form_question: formQuestion,
            form_answer: formAnswer,
            created_at: new Date().toLocaleString(),
        };

        const list = JSON.parse(localStorage.getItem("form_list")) || [];
        list.push(newForm);
        localStorage.setItem("form_list", JSON.stringify(list));

        // remove the draft after publishing
        sessionStorage.removeItem("draft_form");

        navigate("/sforms-created", { state: { form_slug: finalFormSlug } });
    };

    return (
        <section className="bg-black min-h-screen w-full overflow-x-hidden">
            <br />
            <Header_Publish />
            <br/>
            <textarea
                name="form_title"
                placeholder="Form title"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                className="text-4xl text-white placeholder-gray-400 font-bold m-7 h-12 resize-none focus:outline-none"
            />
            <br/>
            <textarea
                name="form_question"
                placeholder="Form question"
                value={formQuestion}
                onChange={(e) => setFormQuestion(e.target.value)}
                className="text-2xl text-white placeholder-gray-400 font-bold m-7 h-24 resize-none focus:outline-none"
            />
            <br/>
            <input
                type="text"
                name="form_answer"
                placeholder="Form answer"
                value={formAnswer}
                onChange={(e) => setFormAnswer(e.target.value)}
                className="text-2xl text-white placeholder-gray-400 font-bold m-7 p-4 h-24 border-2 border-gray-700 rounded-2xl"
            />

            <button
                onClick={handleFormSubmit}
                className="bg-white hover:bg-gray-200 text-black text-1rem font-medium py-1 px-6 ml-7 block rounded-lg"
            >
                Publish Form
            </button>
        </section>
    );
}
