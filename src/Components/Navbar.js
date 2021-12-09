import { Badge, Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { ShoppingCart } from "@mui/icons-material";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="input_wrapper">
        <SearchIcon className="search_icon" />
        <input type="text" placeholder="Search Anything" />
      </div>
      <div className="nav_items">
        <Link to="/">
          <Badge badgeContent={4} >
            <FavoriteBorderIcon />
          </Badge>
        </Link>
        <Link to="/">
          <Badge badgeContent={4} >
            <ShoppingCart />
          </Badge>
        </Link>
     
     <Link to="/">
       <Badge badgeContent={4}>
          <NotificationsNoneIcon />
        </Badge>
     </Link>
        <Avatar>P</Avatar>
        <select defaultValue={"Hi, Jason"} name="select" id="select">
          <option value="Hi Jason">Hi, Jason</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;