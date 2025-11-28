import React, { useEffect, useState } from 'react';

export default function Header_SForms_Home() {

  const [userPhotoURL, setUserPhotoURL] = useState(null);

  useEffect(() => {
    const photoURL = localStorage.getItem("user_photoURL");
    setUserPhotoURL(photoURL);
  }, []);

  return (
    <div className="text-white mt-2 p-4 flex justify-between items-center 
                    border-t-2 border-b-2 border-gray-800">
      <div 
        className="cursor-grab font-bold text-2xl text-left px-4 "
        onClick={() => alert("Logo clicked!")}
      >
        <img src="src/assets/Snippet_logo.png" alt="Snippet" className="h-10" />
      </div>

      <div className="flex gap-2 text-white">
        {userPhotoURL ? (
          <img src={userPhotoURL} alt="user_avatar" className="h-8 w-8 rounded-full" />
        ) : (
          <div className="h-8 w-8 rounded-full bg-gray-500" />
        )}
      </div>
    </div>
  );
}
