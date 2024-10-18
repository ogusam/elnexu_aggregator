//import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom"
//import Login from './components/login/Login';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import PosTransactions from './pages/PosTransactions';
import Transfer from './pages/Transfer';
import Agent from './pages/Agent';
import Marchant from './pages/Marchant';
import Settlement from './pages/Settlement';
import Login from './components/login/Login';
import WithdrawCommission from './pages/WithdrawCommission';
import Withdraw from './components/DashboardContents/Withdraw';
import BalanceHistory from './components/DashboardContents/BalanceHistory';
import TransferForm from './components/DashboardContents/TransferForm';
import PersonalInformation from './pages/PersonalInformation';

function App() {
  return (
    <div>
      <HashRouter basename='/'>
          <Routes>
            <Route path='/' element={<Login/>}/>
          <Route path="/admin" element={<MainLayout/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='POSTransactions' element={<PosTransactions/>}/>
          <Route path='transfer' element={<Transfer/>}>
          <Route path='transfer/transferform' element={<TransferForm/>}/>
          <Route path='transfer/balance' element={<BalanceHistory/>}/>
          </Route>
          <Route path='agent' element={<Agent/>}/>
          <Route path='marchant'element={<Marchant/>}/>
          <Route path='settlement' element={<Settlement/>}/>
          <Route path='withdraw_commison' element={<WithdrawCommission/>}>
          <Route path='withdraw_commission/withdraw' element={<Withdraw/>}/>
          <Route path='withdraw_commission/history' element={<BalanceHistory/>}/>
          </Route>
          <Route path ='PersonalInformation' element={<PersonalInformation/>}/>
          
          </Route>

          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;