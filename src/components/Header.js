import { useState, useContext } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Rendered");
  
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser); 
  
    
  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  
   
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <div className="logo-container">
          <img className="w-14"
            src = {LOGO_URL}
            alt="App Logo"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-5 m-4">
            <li> Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/About">About Us</Link></li> 
            <li className="px-4"><Link to="/Contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4"><Link to="/cart"><li className="px-4">Cart - {cartItems.length} items</li></Link></li>
            
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login" ? setBtnNameReact("LogOut") : setBtnNameReact("Login")
              }}
            >{btnNameReact}</button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
};

export default Header;
