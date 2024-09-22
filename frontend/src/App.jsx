import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateCampaign from "./pages/CreateCampaign";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Homepage/>} />
        <Route path="/create" element={<CreateCampaign/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
