import { NavLink } from "react-router-dom";
import React from "react";
import { Drawer,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,} from "@mui/material";
import '../Components/Sidebar.css';

const Sidebar = () => {
  const Links = [
    {
      title: "home",
      to: "/",
      icon: "fas fa-home",
    },
    {
      title: "My Wardrobe",
      to: "wardrobe",
      icon: "fas fa-tshirt",
    },
    {
      title: "Orders",
      to: "/orders",
      icon: "fas fa-list",
    },
    { title: "My friend",
     to: "/friends",
     icon: "fas fa-user-friends" },

    { title: "My Background", 
    to: "/background", 
    icon: "fas fa-image" },

    { title: "chats", 
    to: "/chats",
     icon: "far fa-comment-dots" },

    { title: "Gifts", 
    to: "/gifts", 
    icon: "fas fa-gift" },
    { title: "My Calandar", 
    to: "/gifts", 
    icon: "fas fa-calendar" },
    { title: "Settings",
     to: "/gifts", 
    icon: "fas fa-cog" }


  ];

  return (
    <div className="side">
      <Toolbar sx={{ padding: 0 }}>
        <div className="logo">
          <img
          src = "https://1000logos.net/wp-content/uploads/2016/10/Burger-King_Logo-500x300.png"
            alt="logo"
          />
        </div>
        <Typography variant="h5" >
          My App
        </Typography>
      </Toolbar>
      <ul className="sidelinks_wrapper">
        {Links.map((el) => (
          <li key={el.title} className="sidelinks">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#4a4a4a",
                background: isActive ? "#66180d" : "transparent",
                width: "100%",
                display: "inline-block",
              })}
              to={el.to}
            >
              <i style={{ marginRight: "15px" }} className={el.icon}></i>
              {el.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
