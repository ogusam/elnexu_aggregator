import React from 'react'
import MainBalance from '../components/DashboardContents/MainBalance'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//import Commission from '../components/DashboardContents/Commission'
//import BalanceHistory from '../components/DashboardContents/BalanceHistory'
//import Withdraw from '../components/DashboardContents/Withdraw'
import {  Link, Outlet } from "react-router-dom";

const WithdrawCommission = () => {
  return (
    <div id='WithdrawCommission'>
        <div>
        <div style={{display: 'flex', gap:'20px', marginTop: '50px'}}>
            <div>
            <Link to='withdraw_commission/history'><MainBalance/></Link>
            </div>
            <div style={{color: '#3E4095'}}>
                <button style={{width: '215px', height: '150px', borderRadius: '12px'}}>Commssion</button>
            </div>
            <div>
            <Link to='withdraw_commission/withdraw'>
            <button style={{width: '215px', height: '150px', background: '#21BE7E', borderRadius: '12px', color:'#FFFFFF', fontSize:'28px', fontWeight:700}}>
                Withdraw Commission<br/><ArrowForwardIcon/>
            </button></Link>
            
            </div>
        </div>
        <Outlet/>

        </div>


        
    </div>
  )
}

export default WithdrawCommission