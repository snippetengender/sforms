import Header from "../components/Header";

export default function SFormsDone(){
    return(
        <div className="bg-black min-h-screen w-full overflow-x-hidden">
        <br/>
        <Header/>
        <br/>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-2xl my-10 font-bold text">Sforms created Successfully</h1>
            <button className="bg-blue-400 px-4 py-2 rounded-2xl font-semibold text-white">copy from link here</button>
        </div>
        
        <section className="text-left">
            <h1 className="text-2xl text-white font-semibold p-4 border-b-1 border-b-gray-500">Responses</h1>

            <h1 className="text-2xl text-white p-4">sample text</h1>
        </section>

        </div>
    );
}