import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header_PreviewPublish from "../components/Header_PreviewPublish";

export default function CreateSForms() {
    const navigate = useNavigate();

    const [formTitle, setFormTitle] = useState("");
    const [formQuestion, setFormQuestion] = useState("");
    const [formAnswer, setFormAnswer] = useState("");

    useEffect(() => {
        const storedDraft = sessionStorage.getItem("draft_form");
        if (storedDraft) {
            const draft = JSON.parse(storedDraft);
            setFormTitle(draft.form_title || "");
            setFormQuestion(draft.form_question || "");
            setFormAnswer(draft.form_answer || "");
        }
    }, []);

    const handleFormSubmit = () => {
        sessionStorage.setItem(
            "draft_form",
            JSON.stringify({
                form_title: formTitle,
                form_question: formQuestion,
                form_answer: formAnswer,
            })
        );

        navigate("/google-sign-in", {state : { from: "/sforms-create" }});
    };

    return (
        <section className="bg-black min-h-screen w-full overflow-x-hidden">
            <br />
            <Header_PreviewPublish />
            <button
                onClick={() => navigate("/create-event-page")}
                className="border-2 border-gray-800 text-1rem hover:bg-gray-900 text-gray-500 rounded-lg py-1 px-5 m-5"
            >
                create an event page
            </button>
            <br />
            <textarea
                type="text"
                name="form_title"
                placeholder="Form title"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                className="text-4xl text-white placeholder-gray-400 font-bold m-7 h-12 resize-none focus:outline-none"
            />
            <br />
            <textarea
                type="text"
                name="form_question"
                placeholder="Form question"
                value={formQuestion}
                onChange={(e) => setFormQuestion(e.target.value)}
                className="text-2xl text-white placeholder-gray-400 font-bold m-7 h-24 resize-none focus:outline-none"
            />
            <br />
            <input
                type="text"
                name="form_answer"
                placeholder="Form answer"
                value={formAnswer}
                onChange={(e) => setFormAnswer(e.target.value)}
                className="text-2xl text-white placeholder-gray-400 font-bold m-7 p-4 h-24 border-2 border-gray-700 rounded-2xl"
            />

            <button
                name="form-submit"
                className="bg-white hover:bg-gray-200 text-black text-1rem font-medium py-1 px-6 ml-7 block rounded-lg"
                onClick={handleFormSubmit}
            >
                Publish
            </button>
        </section>
    );
}