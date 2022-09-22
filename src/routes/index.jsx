import React, { Suspense } from "react";
// import { roles } from "constants/permissions";

import { Route, Routes as ReactRouterDomRoutes } from "react-router-dom";

import Layout from "layout";
import routesConfig from "./routes.config";
import Loader from "components/common/loaders/PageLoader";

const Common = (route) => (
  <Suspense fallback={<Loader />}>
    <route.component />
  </Suspense>
);

const Public = (route) => {
  // Logic for public routes

  // const { user } = useAuth();

  // const redirectTo = "/";

  // if (!!user) return <Navigate to={redirectTo} replace />;

  return (
    <Suspense fallback={<Loader />}>
      <route.component />
    </Suspense>
  );
};

const Private = (route) => {
  // Logic for Private routes

  const { permissions, component: Component } = route;
  console.log(permissions);
  //   const currentUserRole = user.role;

  //   if (!!permissions?.length && !permissions.includes(currentUserRole))
  //     return <Navigate to={"/unauthorized"} replace />;

  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};

const createNestedRoutes = (routes, RouteType) => {
  return routes.map((route, i) => {
    if (!route.component) {
      throw new Error("Component must be required....");
    }
    if (route.children) {
      return (
        <Route path={route.path} key={i} element={<RouteType {...route} />}>
          {createNestedRoutes(route.children, RouteType)}
        </Route>
      );
    } else {
      return (
        <Route
          key={i}
          index={route.index}
          path={route.path}
          element={<RouteType {...route} />}
        />
      );
    }
  });
};

const Routes = () => {
  const { common, private: privateRoutes, public: publicRoutes } = routesConfig;
  return (
    <ReactRouterDomRoutes>
      <Route path="/" element={<Layout />}>
        {createNestedRoutes(common, Common)}
        {createNestedRoutes(privateRoutes, Private)}
        {createNestedRoutes(publicRoutes, Public)}
      </Route>
    </ReactRouterDomRoutes>
  );
};

export default Routes;
