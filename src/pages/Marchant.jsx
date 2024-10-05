import { agentData } from "../DummyData";
import {useState} from "react"


const Marchant = () => {
const [query, setQuery]=useState("")

  const [currentPage, setCurrentPage] =useState(1)
  const recordsPerPage=8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex-recordsPerPage;
  const records =agentData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(agentData.length / recordsPerPage);
  const numbers=[...Array(npage + 1).keys()].slice(1);

  
  return <div> 
    
  <div className='agent'>
    
    <div>
      <labe>Username</labe>
      <input type="text" 
      className='search'
      placeholder="search"
       onChange={(e)=>setQuery(e.target.value)}/>
       <label>Date</label><input type='data' className='data_search'/>
       <button className='agentBtn1'>Create Agent</button><button className='agentBtn2'>Export Excel</button>
    </div>
        <table>
          <thead>
            <tr className='pos_agent'>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>TERMINAL SN</th>
              <th>ACTIVE STATUS</th>
              <th>REG STATUS</th>
              <th>DATE ACQUIRED</th>
              <th>COUNT</th>
              <th>AMOUNT</th>
              
            </tr>
          </thead>
          <tbody className='agent_list'>
          {records.map((d,i)=>(

            <tr>
              <td>{d.username}</td>
              <td>{d.email}</td>
              <td>{d.role}</td>
              <td>{d.terminalSn}</td>
              <td>{d.Reg}</td>
              <td>{d.status}</td>
              <td>{d.date}</td>
              <td>{d.count}</td>
              <td>{d.amount}</td>

            </tr>
                            ))}

          </tbody>
        </table>

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

  </div>;

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
};

export default Marchant;
