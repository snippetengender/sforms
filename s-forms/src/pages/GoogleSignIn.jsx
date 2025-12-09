import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../firebaseConfig";
import GoogleSignInButton from "../components/GoogleSignInButton";

export default function GoogleSignIn() {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || "/sforms-home";

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser && currentUser.photoURL) {
      localStorage.setItem("user_photoURL", currentUser.photoURL);
    }
  }, []);

  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden text-white flex items-center justify-center">
      <div className="w-full max-w-md mx-auto px-6">

        <div className="text-center mb-12">
          <img 
            src="/src/assets/Snippet_logo.png" 
            alt="Snippet Logo" 
            className="h-16 mx-auto mb-4"
          />
          <p className="text-gray-400 text-lg">
            Create and share forms
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Welcome</h2>
            <p className="text-gray-400 text-sm">
              Sign in with your Google account to get started
            </p>
          </div>

          <GoogleSignInButton onSuccess={() => navigate(redirectPath)} />
        </div>
      </div>
    </div>
  );
}