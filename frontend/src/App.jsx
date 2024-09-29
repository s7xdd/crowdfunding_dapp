import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateCampaign from "./pages/CreateCampaign";
import CampaignPage from "./pages/CampaignPage";
import DonatePage from "./pages/DonatePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/create" element={<CreateCampaign/>}/>
        <Route path="/campaigns/:title" element={<CampaignPage/>}/>
        <Route path="/campaigns/donate/:title" element={<DonatePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
