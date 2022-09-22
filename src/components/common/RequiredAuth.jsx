import React from "react";
import { Outlet } from "react-router-dom";

const RequiredAuth = () => {
  // Authentication logic goes here

  //   const { user } = useAuth();
  //   const location = useLocation();

  //   if (!!!user)
  //     return (
  //       <Navigate
  //         to={"/login"}
  //         state={{
  //           from: location.pathname,
  //         }}
  //         replace
  //       />
  //     );

  return <Outlet />;
};

export default RequiredAuth;
