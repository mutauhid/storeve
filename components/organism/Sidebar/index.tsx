import React, { useEffect } from "react";
import Profile from "./Profile";
import SidebarFooter from "./SidebarFooter";
import MenuItem from "./MenuItem";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

interface SidebarProps {
  activeMenu: "overview" | "transactions" | "edit-profile";
}
const Sidebar = (props: SidebarProps) => {
  const { activeMenu } = props;

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            menu="menu-overview"
            active={activeMenu === "overview"}
            href="/member"
          />
          <MenuItem
            title="Transactions"
            menu="menu-transaction"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem title="Messages" menu="menu-messages" href="/member" />
          <MenuItem title="Card" menu="menu-card" href="/member" />
          <MenuItem title="Rewards" menu="menu-reward" href="/member" />
          <MenuItem
            title="Settings"
            menu="menu-settings"
            href="/member/edit-profile"
            active={activeMenu === "edit-profile"}
          />
          <MenuItem title="Log Out" menu="menu-logout" href="/sign-in" />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
};

export default Sidebar;
