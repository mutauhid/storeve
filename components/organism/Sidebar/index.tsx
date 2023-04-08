import React from "react";
import Profile from "./Profile";
import Footer from "./SidebarFooter";
import SidebarFooter from "./SidebarFooter";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" menu="menu-overview" active />
          <MenuItem title="Transactions" menu="menu-transaction" />
          <MenuItem title="Messages" menu="menu-messages" />
          <MenuItem title="Card" menu="menu-card" />
          <MenuItem title="Rewards" menu="menu-reward" />
          <MenuItem title="Settings" menu="menu-settings" />
          <MenuItem title="Log Out" menu="menu-logout" />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
};

export default Sidebar;
