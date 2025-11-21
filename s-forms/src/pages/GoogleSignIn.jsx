import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig"; // Assuming you have googleProvider exported from firebaseConfig
import { useNavigate } from "react-router-dom"
export default function GoogleSignIn() {
    const navigate = useNavigate()
    const logininWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log('User UID:', result.user.uid);
            console.log('Full User Object:', result.user);
            navigate("/user-info")
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h1>Google Authentication</h1>
            <button onClick={logininWithGoogle}>Login with Google</button>
        </div>
    );
}

































// import { GoogleLogin, googleLogout } from "@react-oauth/google"
// import { jwtDecode } from "jwt-decode"
// import { useNavigate } from "react-router-dom"

// export default function GoogleSignIn(){

//     const navigate = useNavigate();

//     function handleLogout(){
//         googleLogout()
//     }
//     return(
//         <>
//             <GoogleLogin 
//             onSuccess={(credentialResponse) => {
//                 console.log(credentialResponse)
//                 console.log(jwtDecode(credentialResponse.credential))
//                 navigate("/user-info")
//             }} 
//             onError={() => console.log("Login failed")}
//             auto_select={true}/>
//         </>
//     );
// }

