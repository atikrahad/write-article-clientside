import PropTypes from "prop-types"
import Navber from "../Shared-Component/Navber";
import { NavLink } from "react-router-dom";
import Sideber from "../Shared-Component/Sideber";

const Bloglayout = ({children}) => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          
          
          {/* Page content here */}
            <Navber></Navber>
            
          
            {children}

        </div>
        <Sideber></Sideber>
      </div>
    </div>
  );
};
Bloglayout.propTypes = {
    children: PropTypes.node,
}
export default Bloglayout;
