import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  FaRegCopy
} from "react-icons/fa";




function WalletSeed() {

  const [seedWords, setSeedWords] = useState('');
  const words = ['Food', 'Mice', 'kit', 'Lagos', 'Food', 'Mice', 'kit', 'Lagos','Food', 'Mice', 'kit', 'Lagos',];

  const copySeedWords = () => {
    const copiedWords = words.join(' ');
    setSeedWords(copiedWords);
    navigator.clipboard.writeText(copiedWords);
  };

  return (
    <div> 
         <div className='center-box'>
            <div className='Cbox'>
                <div className='seed-text'>
                <h1>Wallet Seed phrase</h1>
                <p>Please copy and secure your seed phrase</p>
                </div>
              

                <div className='seeds'>{words.map((word, index) => <span key={index}>{word}</span>)}</div>
              <div onClick={copySeedWords} className="copy"><FaRegCopy/> <p>Copy</p></div>
              <Link to="/VerifySeed">
              <div className='big-btn' >CONTINUE</div></Link>
            </div>
            </div>
    </div>
  )
}

export default WalletSeed