import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header_Publish({ onPublish }) {

  const [userPhotoURL, setUserPhotoURL] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const photoURL = localStorage.getItem("user_photoURL");
    setUserPhotoURL(photoURL);
  }, []);

  return (
    <div className="text-white mt-2 p-4 flex justify-between items-center 
                    border-t-2 border-b-2 border-gray-800">
      <div 
        className="cursor-grab font-bold text-2xl text-left px-4 "
        onClick={() => navigate('/')}
      >
        <img src="src/assets/Snippet_logo.png" alt="Snippet" className="h-10" />
      </div>

      <div className="flex gap-2 text-white">
        <button className="bg-blue-400 text-white px-3 py-2 mx-4 cursor-pointer font-bold rounded-2xl  text-gray-500">Publish</button>
        {userPhotoURL ? (
          // Use the correct state variable 'userPhotoURL'
          <img src={userPhotoURL} alt="user_avatar" className="h-8 w-8 rounded-full" />
        ) : (
          <div className="h-8 w-8 rounded-full bg-gray-500" />
        )}
      </div>
    </div>
  );
}
