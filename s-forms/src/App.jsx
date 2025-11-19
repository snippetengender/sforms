import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home"
import SForm from "./pages/SForms"
import CreateSForms from "./pages/CreateSForms"
import './App.css'

export default function App() {

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/snippet-forms" element={<SForm/>} />
        <Route path="/create-snippet-forms" element={<CreateSForms/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}
