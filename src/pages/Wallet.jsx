import React from 'react';
import imgwallet from "../images/undraw_savings_re_eq4w 1.png"
import { Link ,Outlet} from "react-router-dom";
const Analytics = () => {
    return (
        <div>
            <div className='center-box'>
            <div className='Cbox'>
                <div className='img-wallet'>
                    <img src={imgwallet}/>
                </div>
                <Link to="/WalletSeed">
                <div className='big-btn' style={{marginTop:"7rem"}}>CREATE WALLET</div>
                </Link>
                <p className='wallet-text'>I already have a wallet ,<Link to="/">
                <span style={{color:"#00FF00"}}>click here</span></Link></p>
            </div>
          
            </div>
        </div>
    );
};

export default Analytics;