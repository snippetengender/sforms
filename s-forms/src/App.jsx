import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home"
import CreateSForm from "./pages/CreateSForms"
import './App.css'

export default function App() {

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/create-snippet-forms" element={<CreateSForm/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}
