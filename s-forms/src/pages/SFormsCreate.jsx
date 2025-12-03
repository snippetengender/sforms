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
        const formslug = await fetch("http://localhost:8000/forms/create-slug", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({form_title: formTitle})
            }
        );
        const newForm = {
            form_title: formTitle,
            form_slug: formslug,
            form_question: formQuestion,
            form_answer: formAnswer,
            created_at: new Date().toLocaleString(),
            before_signin: false,
        };

        if (newForm.before_signin === true) { delete newForm.before_signin; }

        let list = JSON.parse(sessionStorage.getItem("form_list")) || [];
        // remove unwanted before_signin forms
        list = list.filter(f => f.before_signin !== true);

        // Check if form already exists (usually never true on first creation)
        const exists = list.some(f => f.formslug === newForm.formslug);

        if (!exists) {

            list.push(newForm);

            sessionStorage.setItem("form_list", JSON.stringify(list));
            sessionStorage.setItem("form_data", JSON.stringify(newForm));

            const payload = {
                created_by: username,
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

            const response = await fetch("http://localhost:8000/forms", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            const formslug = data.form_slug;

            console.log("Form created with ID:", formslug);

            navigate("/sforms-created", { state: { form_slug: formslug } });
        } else {
            console.log("Form already submitted, so skipping");
            navigate("/sforms-created", { state: { form_slug: formslug } });
        }};

    return (
        <section className="bg-black min-h-screen w-full overflow-x-hidden">
            <br />
            <Header_Publish />
            <br/>
            <button
                onClick={() => navigate("/create-event-page")}
                className="border-2 border-gray-800 text-1rem hover:bg-gray-900 text-gray-500 rounded-lg py-1 px-5 m-5"
            >
                create an event page
            </button>
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
                Submit
            </button>

            <img
                src="src/assets/Snippy_peeking.png"
                alt="snippy_peeking"
                className="m-1 mt-10 h-40 md:h-60 w-auto"
            />
        </section>
    );
}
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header_Publish from "../components/Header_Publish";

export default function CreateSForm() {
    const navigate = useNavigate();

    const [formTitle, setFormTitle] = useState("");
    const [formQuestion, setFormQuestion] = useState("");
    const [formAnswer, setFormAnswer] = useState("");


    useEffect(() => {
        const stored = localStorage.getItem("draft_form");
        if (stored) {
            const data = JSON.parse(stored);
            setFormTitle(data.form_title || "");
            setFormQuestion(data.form_question || "");
            setFormAnswer(data.form_answer || "");
        }
    }, []);

    const handleFormSubmit = () => {
        const newForm = {
            id: Date.now(),
            form_title: formTitle,
            form_question: formQuestion,
            form_answer: formAnswer,
            created_at: new Date().toLocaleString(),
            before_signin: false,
        };

        if (newForm.before_signin === true) { delete newForm.before_signin; }

        let list = JSON.parse(localStorage.getItem("form_list")) || [];
        list = list.filter(f => f.before_signin !== true);
        list.push(newForm);

        const exists = list.some((f) => f.id === newForm.id);
        if (!exists) {

        list.push(newForm);
        localStorage.setItem("form_list", JSON.stringify(list));
        localStorage.setItem("form_data", JSON.stringify(newForm));
        navigate("/sforms-created");
        } else {
            console.log("Form already submmited, so skipping")
            navigate("/sforms-home")
        };
    };

    return (
        <section className="bg-black min-h-screen w-full overflow-x-hidden">
            <br />
            <Header_Publish onPublish={handleFormSubmit} />
            <br/>
            <button
                onClick={() => navigate("/create-event-page")}
                className="border-2 border-gray-800 text-1rem hover:bg-gray-900 text-gray-500 rounded-lg py-1 px-5 m-5"
            >
                create an event page
            </button>
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
                className="bg-white hover:bg-gray-200 text-black text-1rem font-medium py-1 px-6 ml-7 block rounded-lg"
            >
                Submit
            </button>

            <img
                src="src/assets/Snippy_peeking.png"
                alt="snippy_peeking"
                className="m-1 mt-10 h-40 md:h-60 w-auto"
            />
        </section>
    );
}
