export default function Header_PreviewPublish() {
  return (
    <div className="text-white mt-2 p-4 flex justify-between items-center 
                    border-t-2 border-b-2 border-gray-800">

      <div 
        className="cursor-grab font-bold text-2xl text-left px-4 "
        onClick={() => alert("Logo clicked!")}
      >
        <img src="src/assets/Snippet_logo.png" alt="Snippet" className="h-10 "/>
      </div>

      <div className="flex gap-2 text-white">
        <button className="px-3 py-2 cursor-pointer font-bold text-gray-500">Preview</button>
        <button className="px-3 py-2 cursor-pointer font-bold text-gray-500">Publish</button>
      </div>
    </div>
  );
}
