import Header_SForms_Home from "../components/Header_SForms_Home";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SFormsHome() {
    const [forms, setForms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedForms = JSON.parse(sessionStorage.getItem("form_list")) || [];
        setForms(savedForms);
    }, []);

    return (
        <div className="bg-black min-h-screen w-full overflow-x-hidden text-white">
            <br />
            <Header_SForms_Home />
            <br />

            <div className="flex items-center justify-between text-2xl p-5 font-semibold border-b-2 border-b-gray-800">
                <h1 className="mx-4">Home</h1>

                <button
                    onClick={() => navigate("/sforms-create")}
                    className="font-medium bg-blue-400 px-4 py-1 rounded-2xl"
                >
                    Create Sforms
                </button>
            </div>

            {forms.length === 0 ? (
                <p className="text-gray-500 text-center mt-10">No forms created yet.</p>
            ) : (
                forms.map((form) => (
                    <div
                        key={form.id}
                        className="border-b-2 border-b-gray-700 p-5">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-semibold">{form.form_title}</h2>
                                <p className="text-gray-500 text-sm">
                                    Created: {form.created_at}
                                </p>
                            </div>

                            <div className="flex items-center space-x-3">
                                <button onClick={() => navigate(`/sform/${form.id}`)} className="bg-white mr-2 text-2xl pb-1 px-5 font-medium text-black rounded-2xl">open</button>
                                <button className="bg-gray-700 p-3 rounded-full text-sm">
                                    &lt;/&gt;
                                </button>
                            </div>
                            
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
