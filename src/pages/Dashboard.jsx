import React from 'react';
import {
    FaWallet,FaPlus
  } from "react-icons/fa";
  import {
    BsFillPlugFill,BsLightningChargeFill ,BsDot
  } from "react-icons/bs";
  import {
    MdBatterySaver
  } from "react-icons/md";
const Dashboard = () => {
    return (
        <div >
           <div className='center-box'>
            <div className='Cbox'>
                <div className='head-d'>
<div className='text-name'>
    <p className='wel'>Welcome Back</p>
    <p className='name'>Chinedu Elijah</p>
</div>
<div className='D-btn'>
    <button><FaWallet style={{marginRight:"10px"}}/>320 BNB</button>
</div>
</div>


<div className='head-s'>
    <div className='s-text'><h1>Charge to Earn</h1></div>
    <div className='s-icon'><BsFillPlugFill/></div>
</div>

<div className='head-t'>
    <div className='t-left'>
        <div className='t-point' > <BsLightningChargeFill/> POINTS EARNED</div>
        <h1>30 GROVE</h1>
        <p>01 DEC , 2025 , 12:00 PM</p>
    </div>
    <div className='t-icon'>
        <FaPlus/>
    </div>
</div>

<div className='head-f'>
    <div className='f-left'>
<h1>Connected Device</h1>
<div className='f-battery1'> <span><MdBatterySaver/></span>Revo Power Bank</div>
<div className='f-box'> Charged ( Today )  2hrs <span>+</span></div>
    </div>
    <div className='f-right'>
<h1>78%</h1>
<p><span><BsDot/></span>Battery</p>
<div  className='f-box'>Used ( Today )  30mins <span style={{color:"red"}}>-</span></div>
    </div>
</div>


<div className='big-btn'>CONNECT DEVICE</div>
            </div>
           </div>
        </div>
    );
};

export default Dashboard;