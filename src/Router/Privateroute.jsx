import PropTypes from "prop-types";
import { useContext } from "react";
import { Authinfo } from "../Shared-Component/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(Authinfo);
  const location = useLocation()
  console.log(location);
  if (loading) {
    return <div></div>;
  } else if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
Privateroute.propTypes = {
  children: PropTypes.node,
};
export default Privateroute;
