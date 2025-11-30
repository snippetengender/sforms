import { BrowserRouter,Routes,Route,Link } from "react-router-dom";


import Home from "./pages/Home"
import SForm from "./pages/SForms"
import CreateSForms from "./pages/CreateSForms"
import GoogleSignIn from "./pages/GoogleSignIn"
import PublishSforms from "./pages/PublishSForms"
import SFormsDone from "./pages/SFormsDone"
import FormPublicView from "./pages/FormPublicView"

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
        <Route path="/publish-sforms" element={<PublishSforms/>} />
        <Route path="/forms/:form_slug" element={<FormPublicView/>} />
        <Route path="/sforms-created" element={<SFormsDone/>} />
{/* 
        <Route path="/forms/:formSlug" element={<FormDetailsPage />} /> */}
      </Routes>
    </BrowserRouter>
  </>
  );
}
