import React from 'react'

const Invoice = () => {
  return (
    <div className='invoice'>
        <h2>Recent Invoice</h2>
        <table className='invoice_table'>
            <thead>
                <tr className='invoice_h'>
                    <th className='invoice_header'>NO</th>
                    <th className='invoice_header'>Date</th>                   
                     <th className='invoice_header'>Receipt</th>
                     <th className='invoice_header'>Amount</th>
                     <th className='invoice_header'>Status</th>

            
                </tr>
            </thead>
            <tbody className='invoice_body'>
                <tr>
                    <td>#BCIO1</td>
                    <td>May 30, 2022</td>
                    <td>John Joe</td>
                    <td>25,000</td>
                    <td><span className='cancelled'>Cancelled</span></td>
                    
                </tr>
                <tr>
                    <td>#BCIO1</td>
                    <td>May 30, 2022</td>
                    <td>John Joe</td>
                    <td>25,000</td>
                    <td>Cancelled</td>
                    
                </tr>
                <tr>
                    <td>#BCIO1</td>
                    <td>May 30, 2022</td>
                    <td>John Joe</td>
                    <td>25,000</td>
                    <td>Cancelled</td>
                    
                </tr>
                <tr>
                    <td>#BCIO1</td>
                    <td>May 30, 2022</td>
                    <td>John Joe</td>
                    <td>25,000</td>
                    <td>Cancelled</td>
                    
                </tr>
                <tr>
                    <td>#BCIO1</td>
                    <td>May 30, 2022</td>
                    <td>John Joe</td>
                    <td>25,000</td>
                    <td>Cancelled</td>
                    
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Invoice