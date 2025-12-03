import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home         from "./pages/Home"
import SForm        from "./pages/SForms"
import CreateSForms from "./pages/CreateSForms"
import GoogleSignIn from "./pages/GoogleSignIn"
import CreateSForm  from "./pages/SFormsCreate"
import SFormsDone   from "./pages/SFormsDone"
import SFormsHome   from "./pages/SFormsHome"
import SFormView    from "./pages/SFormView";
import Qrgenerator  from "./pages/QRgen";
// import Qrscanner    from "./pages/QRread"
import FormPublicView from "./pages/FormPublicView"

import './App.css'

export default function App() {

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/"                     element={<Home/>} />
        <Route path="/snippet-forms"        element={<SForm/>} />
        <Route path="/"                     element={<Home/>} />
        <Route path="/snippet-forms"        element={<SForm/>} />
        <Route path="/create-snippet-forms" element={<CreateSForms/>} />
        <Route path="/google-sign-in"       element={<GoogleSignIn/>} />
        <Route path="/sforms-create"        element={<CreateSForm/>} />
        <Route path="/sforms-created"       element={<SFormsDone/>} />
        <Route path="/sforms-home"          element={<SFormsHome/>} />
        <Route path="/sform/:formslug"      element={<SFormView/>} />
        <Route path="/google-sign-in" element={<GoogleSignIn/>} />
        <Route path="/forms/:form_slug" element={<FormPublicView/>} />
        <Route path="/sforms-created" element={<SFormsDone/>} />
{/* 
        <Route path="/forms/:formSlug" element={<FormDetailsPage />} /> */}
        <Route path="/google-sign-in"       element={<GoogleSignIn/>} />
        <Route path="/sforms-create"        element={<CreateSForm/>} />
        <Route path="/sforms-created"       element={<SFormsDone/>} />
        <Route path="/sforms-home"          element={<SFormsHome/>} />
        <Route path="/sform/:id"            element={<SFormView/>} />

        {/* poc for qr */}
        <Route path="/qrgenerator"          element={<Qrgenerator/>}/>
        <Route path="/qrscanner"            element={<Qrscanner/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}
