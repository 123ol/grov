import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Charge from './pages/Charge.jsx';
import Wallet from './pages/Wallet';
import Market from './pages/Market.jsx';
import Settings from './pages/Settings.jsx';
import ProductList from './pages/ProductList.jsx';
import LoginRegister from "./LoginRegister/LoginRegister"
import NotFound  from './pages/NotFound.jsx';
import WalletSeed from './pages/Wallet/WalletSeed';
import VerifySeed from "./pages/Wallet/VerifySeed"
import WalletBord from "./pages/Wallet/WalletBord"
import Transfer from "./pages/Wallet/Transfer"
import Send from './pages/Wallet/Send';
import TRANSACTIONDETAILS from './pages/Wallet/TRANSACTIONDETAILS';


const App = () => {
  return (
    <div style={{overflowX:"hidden"}}>
    <BrowserRouter>
    <Routes>
      <Route path="/LoginRegister" element={<LoginRegister />} />
      
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Dashboard />} />
        <Route path="Charge" element={<Charge/>} />
        <Route path="Market" element={<Market />} />
        
        <Route path="Wallet" element={<Wallet />}/>
       
          <Route  path="WalletSeed" element={<WalletSeed  />} />
          <Route  path="VerifySeed" element={< VerifySeed/>} />
          <Route  path="WalletBord" element={< WalletBord/>} />
          <Route  path="Transfer" element={< Transfer Send/>} />
          <Route  path="Send" element={< Send/>} />
        <Route path="Settings" element={<Settings />} />
        <Route path="productList" element={<ProductList />} />
        <Route path="TRANSACTIONDETAILS" element={<TRANSACTIONDETAILS />} />
      </Route>
      
      {/* Add a catch-all route to handle any unknown routes */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  </div>
  );
};

export default App;