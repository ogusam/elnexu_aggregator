import React from 'react'
import ApprovedTransaction from '../components/transactionComponents/ApprovedTransaction'
import SuccessfulTransactions from '../components/transactionComponents/SuccessfulTransactions'

import TransactionHistory from '../components/transactionComponents/TransactionHistory'



const PosTransactions = () => {
  return (
    <div>
      
      <div className='pos_transaction'>
              <div className='pos_page_title'><h1>Pos Transactions</h1></div>
              <div>
                <ul style={{display: 'flex', gap:'20px', marginLeft: '-20px'}}>
                    <li>My Transactions</li>
                    <li>Agent Transactions</li>
                </ul>
              </div>
              <div className='transaction_status'>
                  <div>
                    <SuccessfulTransactions/>
                  </div>
                  <div>
                    <ApprovedTransaction/>
                  </div>
              </div>

                      {/*Transaction*/}
            <div className='transction_history'>
                <div>
                    <TransactionHistory/>
                </div>
            </div>
    </div>
    
  </div>
  )
}

export default PosTransactions