export default function UserInfo(){
    return(
        <>
        <section className="bg-black min-h-screen w-full overflow-x-hidden">
            <br></br>
            <Header_PreviewPublish/>
            <button 
                onClick={() => navigate("/create-event-page")}
                className=" border-2 border-gray-800 text-1rem hover:bg-gray-900 text-gray-500 rounded-lg py-1 px-5 m-5"> 
                    create an event page
            </button>
            <br></br>
            <textarea type="text" name="form_title" placeholder="Form title" className="text-4xl text-white placeholder-gray-400 font-bold m-7 h-64 resize-none focus:outline-none overflow-y-auto scrollbar-none" >
            </textarea>
            <button
                onClick={() => navigate("/google-sign-in")} name="form-submit" className= "bg-white hover:bg-gray-200 text-black text-1rem font-medium py-1 px-6 ml-7 block rounded-lg">
                Submit
            </button>
            <img src="src/assets/Snippy_peeking.png" alt="snippy_peeking" className="ml-4 mt-10 h-40 md:h-60 w-auto "/>
        
        </section>
        </>
    )
}