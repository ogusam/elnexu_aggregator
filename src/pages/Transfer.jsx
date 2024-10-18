import React from 'react'

import MainBalance from '../components/DashboardContents/MainBalance'
import { DoTransfer } from '../components/DashboardContents/DoTransfer'
import { Link, Outlet } from 'react-router-dom'
const Transfer = () => {
  return (
    <div>
        
        <div style={{marginTop: "60px"}}>
                <div style={{display: "flex", gap: "30px"}}>
                    <div>
                  <Link to='transfer/balance'><MainBalance/></Link>  
                    </div>
                    <div>
                      <Link to='transfer/transferForm'>
                      <DoTransfer/>
                      </Link>
                    </div>
                    

                </div>
                <div style={{marginTop:'20px'}}>
                <Outlet/>
                </div>
                {/*
                <div>
                  <h2 style={{fontSize:"15px", color:"#2C6DB8", marginTop: "70px"}}>Balance History</h2>
                  <hr></hr>
                </div>

                <table className='balance_history_table'>
                  
                  <tr>
                    <th className='header1'>Time/Date</th>
                    <th className='header2'>Details</th>
                    <th className='header3'>Amount</th>
                    <th className='header4'>Balance afer Transfer</th>
                  </tr>
                </table>
        */}
        </div>
        
    </div>
  )
}

export default Transfer;