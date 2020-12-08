import React from "react";
import "../styles/Nav.css";
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
function Nav() {
  return (
    <div className="nav">
      <img className="nav-image" src="https://i.ebayimg.com/images/g/VYQAAOSwFSNcQijL/s-l640.jpg" alt="" />
      <div className="nav-search-container">
        <input type="text" name="" id="" />
      </div>
      <div className="nav-options-container" >
        <p className="nav-options">Projects</p>
        <p className="nav-options">Setting</p>
        <p className="nav-options">Help</p>
      </div>
      <div className="nav-container" >
        <NotificationsIcon/>
        <ExitToAppIcon/>
      </div>
    </div>
  );
}

export default Nav;
