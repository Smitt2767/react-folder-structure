import { lazy } from "react";
import { Outlet } from "react-router-dom";
import { roles } from "constants/permissions";

import _404 from "components/common/_404";
import Unauthorized from "components/common/Unauthorized";
import RequiredAuth from "components/common/RequiredAuth";

// Use lazy loaded pages

const Dashboard = lazy(() => import("modules/dashboard/pages"));
// const Admin = lazy(() => import("../components/Admin"));
// const Profile = lazy(() => import("../components/Profile"));
// const Customer = lazy(() => import("../components/Customer"));
// const Home = lazy(() => import("../components/Home"));
// const Login = lazy(() => import("../components/Login"));

const routesConfig = {
  common: [
    {
      index: true,
      component: Dashboard,
    },
    {
      path: "unauthorized",
      component: Unauthorized,
    },
    { path: "*", component: _404 },
  ],
  private: [
    {
      path: "/",
      component: RequiredAuth,
      children: [
        {
          path: "admin",
          permissions: [roles.admin],
          component: Outlet,
          children: [
            // { index: true, component: Admin },
            // { path: "users", component: () => <div>Users</div> },
            // { path: "settings", component: () => <div>Settings</div> },
          ],
        },
        {
          path: "customer",
          permissions: [roles.customer],
          component: Outlet,
          children: [
            // { index: true, component: Customer },
            // { path: "cart", component: () => <div>Cart</div> },
          ],
        },
        // {
        //   path: "profile",
        //   permissions: [roles.customer, roles.admin],
        //   component: Profile,
        // },
      ],
    },
  ],
  public: [
    // { path: "login", component: Login }
  ],
};

export default routesConfig;
