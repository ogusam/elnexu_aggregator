import { useState, useEffect } from 'react'
import { Layout, Menu, Button} from 'antd';
import { CiLogout } from "react-icons/ci";

import "./Layout.css"
import elnexu_logo from "../assets/elnexu_logo.png"
import logo2 from '../assets/logo2.png'
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import { FaUser } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GridView } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
const { Header, Footer, Sider, Content, } = Layout;

const MainLayout = () => { 
  
  const[displayusername, displayusernameupdate]=useState('')
  

  useEffect(()=>{
    let username=sessionStorage.getItem('username');
    

    if(username==='' || username ===null){
    navigate('./LoginForm')
    }else{
      displayusernameupdate(username)
      
    }
     

  },[]);


  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  return (
    <Layout className='container'>
        <Sider className='sider'
        trigger={null} collapsible collapsed={collapsed}>
          <div>
          
          <img src={elnexu_logo} alt='' className='logo' />
          <img src={logo2} alt='' className='logo2'/>
          </div>
          <Menu
          className='menu'
          mode='inline'
          defaultSelectedKeys={['Dashboard']}
          onClick={({key})=>{
            navigate(key);
          }            
          }
          items={
            [
              {
              label: "DASHBOARD",
              key: "Dashboard",
              icon: <GridView/>
              },
              {
                label: "TRANSACTIONS ",
                key: "Transaction",

                icon:<SyncAltRoundedIcon/>,
                children:[
                  {
                    label:"POS Transactions",
                    key: "POSTransactions",
                    icon: ""
                  },
                  {
                    label: "Transfer",
                    key:"Transfer"
                    
                  },
                  {
                    label: "Withdraw Commission",
                    key: "withdraw_commison"
                  }
                ]
              },
              {
                label: "BUSSINES ",
                key: "bussiness",
                icon:<FaUser />
                ,
                children:[
                  {
                    label:"POS Agent",
                    key: "Agent",
                    icon: "",
                  },
                  {
                    label: "Marchant",
                    key:"Marchant"
                    
                  },
                
                ]
              },
              {
                label: "SETTLEMENT ACCOUNT",
                icon:<SyncAltRoundedIcon/>,
                children:[
                  {
                    label: "Set SettleBank Account",
                    key: "Settlement",
                    icon: "",
                  },
                  {
                    label: "Auto Settlement Configuration",
                    key:"auto-settlement"
                    
                  },
                
                ]
              },
              {
                label: "PERSONAL DETAIL",
                icon:<FaUser />
                ,
                children:[
                  {
                    label: "Personal Information",
                    key: "PersonalInformation",
                    icon: <FaUserEdit />
                    ,
                  },
                
                
                ]
              },
              {
                key: '/login',
                icon: <CiLogout />,
                label: 'Logout',
              },

              
  
            ]
          }
          
          />
          
        </Sider>
        <Layout className='layout'>
        <Header className='header' >
          <Button
               type="text"
                icon={collapsed ? <GridView /> : <GridView/>}
              onClick={() => setCollapsed(!collapsed)}
                          style={{
                            fontSize: '10px',
                            width: 20,
                            height: 20,
                            
                          }}
              
          />
                   <b style={{color:'#3E4095', fontSize:"15px", marginLeft:'10px'}}>{pathname.slice(7)}</b><br />
                   <div style={{marginTop:'-50px', float:'right', paddingTop:'-0px', fontWeight:'bolder', fontSize:'20px'}}>{displayusername}</div>
            
                
        </Header>
        <Content className='content'>
          <Outlet/>
          
        </Content>
        <Footer className='footer'>
        <h1>2004 copyright A product of Elnexu Consult</h1>

        </Footer>
      </Layout>

    </Layout>
  )
}

export default MainLayout