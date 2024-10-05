//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
//import Login from './components/login/Login';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import PosTransactions from './pages/PosTransactions';
import Transfer from './pages/Transfer';
import Agent from './pages/Agent';
import Marchant from './pages/Marchant';
import Settlement from './pages/Settlement';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
          <Route path="/admin" element={<MainLayout/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='pos' element={<PosTransactions/>}/>
          <Route path='transfer' element={<Transfer/>}/>
          <Route path='agent' element={<Agent/>}/>
          <Route path='marchant'element={<Marchant/>}/>
          <Route path='settlement' element={<Settlement/>}/>
          
          </Route>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
