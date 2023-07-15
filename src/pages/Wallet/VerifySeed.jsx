import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VerifySeed() {
  const words = ['Food', 'Mice', 'kit', 'Lagos', 'Food', 'Mice', 'kit', 'Lagos', 'Food', 'Mice', 'kit', 'Lagos'];
  const [verificationResults, setVerificationResults] = useState(new Array(words.length).fill(''));
  const navigate = useNavigate();

  const handleInputChange = (e, index) => {
    const newVerificationResults = [...verificationResults];
    newVerificationResults[index] = e.target.value;
    setVerificationResults(newVerificationResults);
  };

  const handleProceed = () => {
    let allWordsVerified = true;
    for (let i = 0; i < words.length; i++) {
      if (verificationResults[i] !== words[i]) {
        allWordsVerified = false;
        break;
      }
    }

    if (allWordsVerified) {
      toast.success('Seed words matched. Proceeding to the next page...', {
        onClose: () => {
          setTimeout(() => {
            navigate('/WalletBord'); 
          }, 1000);
        },
      });
    } else {
      toast.error('Incorrect seed words. Please try again.');
    }
  };

  return (
    <div>
      <div className='center-box'>
        <ToastContainer />
        <div className='Cbox'>
          <div className='seed-text'>
            <h1>Verify Seed phrase</h1>
            <p>Insert the words you copied accordingly</p>
          </div>
          <div className='seeds'>
            {words.map((word, index) => (
              <div key={index}>
                <span>
                  <input
                    type="text"
                    value={verificationResults[index]}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </span>
              </div>
            ))}
          </div>
          <button className='big-btn' onClick={handleProceed} >
            PROCEED
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifySeed;
