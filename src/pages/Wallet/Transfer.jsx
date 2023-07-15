import React from 'react'
import { BsArrowUpRight, BsArrowDown, BsArrowLeftRight } from 'react-icons/bs';
import { BiMessageAltAdd } from 'react-icons/bi';
import Bnb from '../../images/bnb.png';
import Tran from '../../images/Frame 3739.png';

function Transfer() {
  return (
    <div>
        <div className='center-box'>
            <div className='Cbox'>
            <div className="add">
            <p>Add new</p>
            <BiMessageAltAdd />
          </div>
          <div className="bord-h">
          <div className="bord-img">
          <img src={Bnb} alt="" />
          <h1>1.264564 BNB</h1>
          <p>$340.00</p>
          </div>
            <div className="bord-icon">
              <div className="icons">
                <span>
                  <BsArrowUpRight />
                </span>
                <p>Send</p>
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
            
            </div>
            <div className="list-tran">
            <p>31 Jan 2023</p>
            <div className="list   tran-list">
              
    <div className="list_right">
      <img src={Tran} alt="" />
      <div className="right-text tran-text">
      <h5>Transfer</h5>
        <p>From 0xC459383028430000</p>
      </div>
    </div>
    <div className="list_left    tran-left">
     <p>+0.0123 BNB</p>
    </div>
  </div>
  <p>31 Jan 2023</p>
  <div className="list   tran-list">
  <div className="list_right">
      <img src={Tran} alt="" />
      <div className="right-text tran-text">
        <h5>Transfer</h5>
        <p>From 0xC459383028430000</p>
      </div>
    </div>
    <div className="list_left    tran-left">
     <p>+0.0123 BNB</p>
    </div>
  </div>
  <p>31 Jan 2023</p>
  <div className="list   tran-list">
  <div className="list_right">
      <img src={Tran} alt="" />
      <div className="right-text tran-text">
      <h5>Transfer</h5>
        <p>From 0xC459383028430000</p>
      </div>
    </div>
    <div className="list_left    tran-left">
     <p>+0.0123 BNB</p>
    </div>
  </div>
  <p>31 Jan 2023</p>
  <div className="list   tran-list">
  <div className="list_right">
      <img src={Tran} alt="" />
      <div className="right-text tran-text">
      <h5>Transfer</h5>
        <p>From 0xC459383028430000</p>
      </div>
    </div>
    <div className="list_left    tran-left">
     <p>+0.0123 BNB</p>
    </div>
  </div>
  <p>31 Jan 2023</p>
  <div className="list   tran-list">
  <div className="list_right">
      <img src={Tran} alt="" />
      <div className="right-text tran-text">
      <h5>Transfer</h5>
        <p>From 0xC459383028430000</p>
      </div>
    </div>
    <div className="list_left    tran-left">
     <p>+0.0123 BNB</p>
    </div>
  </div>
  </div>
              </div>
              </div>
    </div>
  )
}

export default Transfer