import React from 'react'

const Withdraw = () => {
  return (
    <div id='withdraw'>
        <h1>Withdraw</h1>
        <hr/>
        <form>
            <div className='withdraw_form'>
            <div id='withdrawInput'>
            <label>Amount</label><br></br>
            <input type='text' placeholder='Enter Amount'/><br></br>
            </div>
            <div id='withdrawInput'>
            <label>Pin</label><br></br>
            <input type='text' placeholder='Enter Pin'/><br></br>
           </div>
            <button style={{width: '500px', height: '53px', background:'#3E4095', borderRadius:'8px', border: 'none', color:'white'}}>WithDraw</button>
            </div>
        </form>
    </div>
  )
}

export default Withdraw