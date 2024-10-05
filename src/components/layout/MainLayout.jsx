import { useState } from 'react'
import { Layout, Menu, Button} from 'antd';
import { CiLogout } from "react-icons/ci";

import "./Layout.css"
import elnexu_logo from "../assets/elnexu_logo.png"
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import { FaUser } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GridView } from '@mui/icons-material';

const { Header, Footer, Sider, Content, } = Layout;

const MainLayout = () => { 
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);


  return (
    <Layout className='container'>
        <Sider className='sider'
        trigger={null} collapsible collapsed={collapsed}>
          <div>
          <img src={elnexu_logo} alt='' className='logo' />

          </div>
          <Menu
          className='menu'
          mode='inline'
          defaultSelectedKeys={['dashboard']}
          onClick={({key})=>{
            navigate(key);
          }            
          }
          items={
            [
              {
              label: "DASHBOARD",
              key: "dashboard",
              icon: <GridView/>
              },
              {
                label: "TRANSACTIONS ",
                icon:<SyncAltRoundedIcon/>,
                children:[
                  {
                    label:"POS Transactions",
                    key: "pos",
                    icon: ""
                  },
                  {
                    label: "Transfer",
                    key:"transfer"
                    
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
                    key: "agent",
                    icon: "",
                  },
                  {
                    label: "Marchant",
                    key:"marchant"
                    
                  },
                
                ]
              },
              {
                label: "SETTLEMENT ACCOUNT",
                icon:<SyncAltRoundedIcon/>,
                children:[
                  {
                    label: "Set SettleBank Account",
                    key: "settlement",
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
                    key: "pos-agent",
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