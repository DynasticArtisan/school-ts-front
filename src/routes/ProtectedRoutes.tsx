import React from "react";

import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAppSelector from "../hooks/useTypedSelector";

const ProtectedRoutes: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace={true}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoutes;
