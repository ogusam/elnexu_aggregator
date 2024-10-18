import React from 'react'

const BalanceHistory = () => {
  return (
    <div>
        
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
    </div>
  )
}

export default BalanceHistory