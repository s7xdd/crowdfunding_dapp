import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateCampaign from "./pages/CreateCampaign";
import CampaignPage from "./pages/CampaignPage";
import DonatePage from "./pages/DonatePage";
import { UseWalletProvider } from "use-wallet";

function App() {
  return (
    <UseWalletProvider
      chainId={4}
      connectors={{
        walletconnect: {
          rpcUrl:
            "https://goerli.infura.io/v3/eaf842956c36444c8aaf54163a47e0d2",
        },
      }}
    >

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/create" element={<CreateCampaign/>}/>
        <Route path="/campaigns/:title" element={<CampaignPage/>}/>
        <Route path="/campaigns/donate/:title" element={<DonatePage/>}/>
      </Routes>
    </BrowserRouter>
    </UseWalletProvider>
  );
}

export default App;
