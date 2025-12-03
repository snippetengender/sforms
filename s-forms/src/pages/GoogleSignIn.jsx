import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig"; // Assuming you have googleProvider exported from firebaseConfig
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function GoogleSignIn() {
    const navigate = useNavigate();

    const logininWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log('User UID:', user.uid);
            console.log('Full User Object:', user); 

            if (user.photoURL) {
                localStorage.setItem("user_photoURL", user.photoURL);
            } else {
                console.warn("User photoURL is not available");
            }

            navigate("/sforms-create");
        } catch (error) {
            console.error("Error during Google Sign-In: ", error); // Log error
            alert("An error occurred during Google Sign-In. Please try again.");
        }
    };

    useEffect(() => {
        const currentUser = auth.currentUser;
        if (currentUser && currentUser.photoURL) {
            localStorage.setItem("user_photoURL", currentUser.photoURL);
        } else {
            console.warn("User photoURL is not available");
        }
    }, []);


    return (
        <div className="bg-black min-h-screen w-full overflow-x-hidden text-2xl text-white">
            <h1>Google Authentication</h1>
            <button onClick={logininWithGoogle} className="bg-gray-800 rounded-2xl p-4 cursor-pointer">
                Sign in with Google
            </button>
        </div>
    );
}
