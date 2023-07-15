import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../images/Frame 1183.png";

function ProgressBar({ currentSection }) {
  const totalSections = 2;
  const progressPercentage = ((currentSection + 1) / totalSections) * 100;

  return (
    <div className="progress-bar">
      <div className="progress-bar__fill" style={{ width: `${progressPercentage}%` }}></div>
    </div>
  );
}

function PersonalInfoSection({ onNext }) {
  const [receiverAddress, setReceiverAddress] = useState('');
  const [usdtAmount, setUsdtAmount] = useState('');

  const handleReceiverAddressChange = (e) => {
    setReceiverAddress(e.target.value);
  };

  const handleUsdtAmountChange = (e) => {
    setUsdtAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: "black" }}>
      <div className="coolinput">
        <label htmlFor="input" className="text">Receiver’s USDT address</label>
        <input type="text" placeholder="Write here..." name="input" className="input" value={receiverAddress} onChange={handleReceiverAddressChange} />
      </div>
      <div className="coolinput">
        <label htmlFor="input" className="text">Amount of USDT</label>
        <input type="text" placeholder="Write here..." name="input" className="input" required value={usdtAmount} onChange={handleUsdtAmountChange} />
      </div>
      <div className='send-p'>
        <p>Approx = $20</p>
      </div>
      <button type="submit">PROCEED</button>
    </form>
  );
}

function ContactDetailsSection({ onNext }) {
 

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
   
  };

  return (
    <div className='sub-bar'>
      <div className='send'>
        You’re about to send 25 USDT to <span>0X554NFKFMNDKFKGJJHJHJ</span>
        CONFIRM to complete the transaction
      </div>
      <button type="submit" onClick={handleSubmit}>CONFIRM</button>
    </div>
  );
}

function ConfirmSection() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/TRANSACTIONDETAILS');
  
  };

  return (
    <div className='succ'>
      <img src={logo} alt="Success" />
      <p>Transfer successful!</p>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
}

function Result() {
  return (
    <div>
      <h1>Transfer Successful!</h1>
      {/* Add your result page content here */}
    </div>
  );
}

function Send() {
  const [currentSection, setCurrentSection] = useState(0);

  const handleNextSection = () => {
    setCurrentSection(currentSection + 1);
  };

  return (
    <div className='center-box'>
      <div className='Cbox'>
        <div className='pro-bar'>
          <h1>Send USDT (BEP20)</h1>
          {currentSection !== 2 && <ProgressBar currentSection={currentSection} />}
          {currentSection === 0 && <PersonalInfoSection onNext={handleNextSection} />}
          {currentSection === 1 && <ContactDetailsSection onNext={handleNextSection} />}
          {currentSection === 2 && <ConfirmSection />}
        </div>
      </div>
    </div>
  );
}

export default Send;
