import React from "react";

import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAppSelector from "../hooks/useTypedSelector";

const PublicRoutes: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const location = useLocation();
  if (user) {
    return <Navigate to={location.state?.from || "/account"} replace={true} />;
  }

  return <Outlet />;
};

export default PublicRoutes;
