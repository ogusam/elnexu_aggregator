import React, { useState } from 'react'
import Data from "./Data.json"

const TransactionHistory = () => {
    
    const [currentPage, setCurrentPage] =useState(1)
    const recordsPerPage=8;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex-recordsPerPage;
    const records =Data.slice(firstIndex, lastIndex);
    const npage = Math.ceil(Data.length / recordsPerPage);
    const numbers=[...Array(npage + 1).keys()].slice(1);
    
  return (
   
        <div className='my_transaction_history'>
            <div>
                <div style={{display: "flex", gap: 20, marginTop:20}}>
                    <h3>Transaction History</h3>
                    <button className='Tbtn'>Export Excel</button>
                </div>
            </div>
        <div className='transaction_history_list'>
            <ul>
                <li>All(0)</li>
                <li>transfer</li>
                <li>CashoutPurchase</li>
                <li>Bill Payment</li>
                <li>Other</li>
            </ul>
            <hr></hr>
        </div>
            <div  style={{ padding: 'auto', overflowX:"scroll"}}>
        <table>
            <thead>
            <tr className='transactionTR'>
                <th>S/N</th>
                <th>DATE</th>
                <th>ORDER NO</th>
                <th>TYPE</th>
                <th>AGENT</th>
                <th>SN</th>
                <th>AMOUNT</th>
                <th>SETTLED</th>
                <th>FEE</th>
                <th>MY COMMISSION</th>
                <th>STATUS</th>
                

            </tr>
            </thead>
            <tbody>
                {records.map((d,i)=>(
                    <tr key={i}>
                        <td>{d.ID}</td>
                        <td>{d.DATE}</td>
                        <td>{d.ORDER}</td>
                        <td>{d.TYPE}</td>
                        <td>{d.AGENT}</td>
                        <td>{d.SN}</td>
                        <td>{d.AMOUNT}</td>
                        <td>{d.SETTLED}</td>
                        <td>{d.FEE}</td>
                        <td>{d.COMMISSION}</td>
                        <td>{d.STATUS}</td>
                        

                    </tr>
                ))}
            </tbody>
        </table>
                </div>
            <nav>
                <ul className='pagination'>
                    <li className='page-item'>
                    <button className='page-link' onClick={prePage}>
                        Prev
                    </button>
                    </li>
                {
                    numbers.map((n, i)=>(
                        <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                            <button className='page-n'
                            onClick={()=>changeCPage(n)}>{n}</button>
                        </li>
                    ))
                }
                    <li className='page-item'>
                        <button className='page-link'
                        onClick={nextPage}>Next
                        </button>
                    </li>
                </ul>     
            </nav>
        </div>
    
  )
  function prePage(){
    if(currentPage !== 1){
        setCurrentPage(currentPage - 1)
    }
  }
  
  function changeCPage(id){
    setCurrentPage(id)
  }

  function nextPage(){
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1)
        }
  }
}

export default TransactionHistory