import { BrowserRouter,Routes,Route,Link } from "react-router-dom";


import Home from "./pages/Home"
import SForm from "./pages/SForms"
import CreateSForms from "./pages/CreateSForms"
import GoogleSignIn from "./pages/GoogleSignIn"
import UserInfo from "./pages/UserInfo"

import './App.css'

export default function App() {

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/snippet-forms" element={<SForm/>} />
        <Route path="/create-snippet-forms" element={<CreateSForms/>} />
        <Route path="/google-sign-in" element={<GoogleSignIn/>} />
        <Route path="/user-info" element={<UserInfo/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}
