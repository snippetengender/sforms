import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header_Publish from "../components/Header_Publish";

export default function CreateSForm() {
    const navigate = useNavigate();

    useEffect(() => {
        const storedFormData = sessionStorage.getItem("form_data");
        
        if (storedFormData) {
            const formData = JSON.parse(storedFormData);
            // Populate the form fields with the stored data
            document.querySelector('textarea[name="form_title"]').value = formData.form_title || '';
            document.querySelector('textarea[name="form_question"]').value = formData.form_question || '';
            document.querySelector('input[name="form_answer"]').value = formData.form_answer || '';
        }
    }, []);

    const handleFormSubmit = () => {

        const formTitle = document.querySelector('textarea[name="form_title"]').value;
        const formQuestion = document.querySelector('textarea[name="form_question"]').value;
        const formAnswer = document.querySelector('input[name="form_answer"]').value;

        const formData = {
            form_title: formTitle,
            form_question: formQuestion,
            form_answer: formAnswer
        };

        sessionStorage.setItem('form_data', JSON.stringify(formData));

        navigate("/sforms-created");
    };

    return (
        <>
            <section className="bg-black min-h-screen w-full overflow-x-hidden">
                <br />
                <Header_Publish />
                <button
                    onClick={() => navigate("/create-event-page")}
                    className="border-2 border-gray-800 text-1rem hover:bg-gray-900 text-gray-500 rounded-lg py-1 px-5 m-5">
                    create an event page
                </button>
                <br />
                <textarea
                    type="text"
                    name="form_title"
                    placeholder="Form title"
                    className="text-4xl text-white placeholder-gray-400 font-bold m-7 h-12 resize-none focus:outline-none overflow-y-auto scrollbar-none"
                />
                <br/>
                <textarea
                    type="text"
                    name="form_question"
                    placeholder="Form question"
                    className="text-2xl text-white placeholder-gray-400 font-bold m-7 h-24 resize-none focus:outline-none overflow-y-auto scrollbar-none"
                />
                <br/>
                <input
                    type="text"
                    name="form_answer"
                    placeholder="Form answer"
                    className="text-2xl text-white placeholder-gray-400 font-bold m-7 p-4 h-24 resize-none border-2 border-gray-700 rounded-2xl"
                />
                <button
                    onClick={handleFormSubmit} // Trigger form submit on button click
                    name="form-submit"
                    className="bg-white hover:bg-gray-200 text-black text-1rem font-medium py-1 px-6 ml-7 block rounded-lg">
                    Submit
                </button>
                <img src="src/assets/Snippy_peeking.png" alt="snippy_peeking" className="m-1 mt-10 h-40 md:h-60 w-auto" />
            </section>
        </>
    );
}
