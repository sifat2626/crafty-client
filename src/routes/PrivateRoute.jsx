/* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 200); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (user) {
    return <div>{children}</div>;
  }

  return <Navigate state={location.pathname} to={"/login"} replace />;
}

export default PrivateRoute;
