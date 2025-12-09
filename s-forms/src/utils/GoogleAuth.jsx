import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";

export const signInWithGoogle = async (apiurl) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    const idToken = await user.getIdToken();

    await fetch(`${apiurl}/forms/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_token: idToken }),
    });

    if (user.displayName) {
      localStorage.setItem("user_name", user.displayName);
    }

    if (user.email) {
      localStorage.setItem("user_email", user.email);
    }

    if (user.photoURL) {
      localStorage.setItem("user_photoURL", user.photoURL);
    }

    return user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};
