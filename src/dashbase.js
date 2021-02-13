import React, { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";

import AdminRoutes from "./routes/admin-routes";
import UserRoutes from "./routes/user-routes";
import MerchantRoutes from "./routes/merchant-routes";
import NavBar from "../components/navbar/navbar";
import AdminNavBar from "../components/navbar/admin-navbar";
import AdminSidebar from "../components/admin-sidebar/admin-sidebar";

const hist = createBrowserHistory();

const Dashbase = () => {
  const { user } = useSelector((state) => state.userSlice);
  const [adminSidebarOpen, setAdminSidebarOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 840) {
      setAdminSidebarOpen(!adminSidebarOpen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleAdminSidebar = () => {
    setAdminSidebarOpen(!adminSidebarOpen);
  };

  const renderInstance = () => {
    switch (user.type) {
      case "default":
        return (
          <React.Fragment>
            <NavBar
              navLinks={[
                { to: "/dashboard", exact: false, name: "Dashboard" },
                { to: "/investments", exact: false, name: "My Investments" },
                { to: "/profile", exact: false, name: "Profile" },
              ]}
              hideDashboardLink
            />
            <UserRoutes />
          </React.Fragment>
        );
      case "admin":
        return (
          <React.Fragment>
            <AdminNavBar
              toggleSidebar={() => toggleAdminSidebar()}
              isSidebarOpen={adminSidebarOpen}
            />
            <div className="admin_flex_div">
              <AdminSidebar
                isSidebarOpen={adminSidebarOpen}
                toggleSidebar={() => toggleAdminSidebar()}
              />
              <div
                className={`section admin_dashbase ${
                  adminSidebarOpen && "shrink"
                }`}
              >
                <AdminRoutes />
              </div>
            </div>
          </React.Fragment>
        );
      case "subadmin":
        return (
          <React.Fragment>
            <NavBar navLinks={[]} hideDashboardLink />
            <div className="flex">
              <AdminRoutes />
            </div>
          </React.Fragment>
        );
      case "merchant":
        return (
          <React.Fragment>
            <NavBar
              navLinks={[
                { to: "/merchant/dashboard", exact: false, name: "Dashboard" },
              ]}
              hideDashboardLink
            />
            <MerchantRoutes />
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <NavBar
              navLinks={[
                { to: "/dashboard", exact: false, name: "Dashboard" },
                { to: "/investments", exact: false, name: "My Investments" },
                { to: "/profile", exact: false, name: "Profile" },
              ]}
              hideDashboardLink
            />
            <UserRoutes />
          </React.Fragment>
        );
    }
  };

  return <Router history={hist}>{renderInstance()}</Router>;
};

export default Dashbase;
