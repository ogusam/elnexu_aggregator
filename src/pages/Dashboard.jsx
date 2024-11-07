import React from 'react'
import Balance from '../components/DashboardContents/Balance'
import TotalTransfer from '../components/DashboardContents/TotalTransfer';
import Commission from '../components/DashboardContents/Commission';
import Dagent from '../components/DashboardContents/Dagent';
import Terminal from '../components/DashboardContents/Terminal';
import Chart from '../components/chart/Chart';
import { userData } from '../DummyData';
import Invoice from '../components/DashboardContents/Invoice';
const Dashboard = () => {
  return (
    <div className='dashboard'>
      
          <div className='dashboardmain'>
              <div>
                    <div>
                      <Balance/>
                    </div>
                    <div className='activity'>
                        <div><TotalTransfer/></div>
                        <span><hr/></span>
                        <div><Commission/></div>
                    </div>
              </div>
              <div>
                  <div className='dashbaord_terminal'>
                    <Dagent/>
                    <Terminal/>
                  </div>
                  <div className="chart">
                    <Chart data={userData} dataKey='withdraw'/>

                  </div>
              </div>
          </div>
          <div className='invoices'>
                <Invoice/>
          </div>

    </div>
  )
}

export default Dashboard