import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/HomePage";
import CreateSForm from "./pages/CreateSForms";
// import './App.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/create-snippet-forms" element={<CreateSForm/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
