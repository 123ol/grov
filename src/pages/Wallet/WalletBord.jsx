import React from 'react';
import { useNavigate ,Link} from 'react-router-dom';

import { BsArrowUpRight, BsArrowDown, BsArrowLeftRight } from 'react-icons/bs';
import { BiMessageAltAdd } from 'react-icons/bi';
import Bnb from '../../images/bnb.png';

const jsonData = [
  {
    currency: 'BNB',
    value: '$0.48',
    percentage: '-5.56%',
    quantity: '1.00',
    totalValue: '$340.00'
  },
  // Add more objects to represent additional data
];

function WalletBord() {
  const navigate = useNavigate();

  const handleItemClick = () => {
    // Navigate to Transfer page
    navigate('/Transfer');
  };

  return (
    <div>
      <div className="center-box">
        <div className="Cbox">
          <div className="add">
            <p>Add new</p>
            <BiMessageAltAdd />
          </div>
          <div className="bord-h">
            <button className="bigger-btn">$200.00</button>
            <div className="bord-icon">
            
              <div className="icons">
              <Link to="/">
                <span>
                  <BsArrowUpRight />
                </span>
                <p>Send</p>
                </Link>
              </div>
              
              <div className="icons">
                <span>
                  <BsArrowDown />
                </span>
                <p>Receive</p>
              </div>
              <div className="icons">
                <span>
                  <BsArrowLeftRight />
                </span>
                <p>Stake</p>
              </div>
            </div>
            <div className="list_bord">
              {jsonData.map((item, index) => (
                <div className="list" key={index} onClick={handleItemClick}>
                  <div className="list_right">
                    <img src={Bnb} alt="" />
                    <div className="right-text">
                      <p>{item.currency}</p>
                      <p>
                        {item.value}
                        <span>{item.percentage}</span>
                      </p>
                    </div>
                  </div>
                  <div className="list_left">
                    <p>{item.quantity}</p>
                    <p>{item.totalValue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletBord;
