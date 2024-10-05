import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import elnexu_logo from "../assets/elnexu_logo.png"
import { MdMessage } from "react-icons/md";

import { BiCog } from "react-icons/bi";
import {  AiTwotoneFileExclamation } from "react-icons/ai";

//import DashboardIcon from '@mui/icons-material/Dashboard';
//import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion, } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/dashboard",
    name: "DASHBOARD",
    
    
  },
  
  {
    path: "/transactions",
    name: "TRANSACTIONS",
  
    subRoutes: [
      {
        path: "/transactions/pos",
        name: "Pos Transactions",
        icon: <FaUser />,
      },
      {
        path: "/transfer",
        name: "Transfer",
        icon: <FaLock />,
      },
      {
        path: "/withdraw/commission",
        name: "Withdraw Commission",
        icon: <FaMoneyBill />,
      },
    ],
  },

  {
    path: "/agent",
    name: "AGENT",
    
    subRoutes: [
      {
        path: "/pos agent",
        name: "Pos Agent ",
        icon: <FaUser />,
      },
    
    ],
  },

  {
    path: "/personal-info",
    name: "PERSONAL DETAIL",
    
    subRoutes: [
      {
        path: "/Personal Information",
        name: "Personal Information",
        icon: <FaUser />,
      },
    
    ],
  },
  
  {
    path: "/Setlement ",
    name: "SETLEMENTBANK ACCOUNT ",
    

  },
  

];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        
        <motion.div
          animate={{
            width: isOpen ? "304px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <img
                  src={elnexu_logo} alt="" style={{width:100, height:120}}/>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          
            
            
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
                
              );
            })}
          </section>
          <div >
              <button className="logout_btn">Log out</button>
            </div>

        </motion.div>

        <main>{children}</main>
        
      </div>
    </>
  );
};

export default SideBar;
