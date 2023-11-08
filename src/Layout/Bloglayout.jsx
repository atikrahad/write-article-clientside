import PropTypes from "prop-types";
import Navber from "../Shared-Component/Navber";
import Sideber from "../Shared-Component/Sideber";
import Footer from "../Shared-Component/Footer";
import Headroom from "react-headroom";

const Bloglayout = ({ children }) => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Page content here */}
          <Headroom className="lg:contents hidden">
            <Navber></Navber>
          </Headroom>
          <div className="lg:hidden">
          <Navber ></Navber>
          </div>
          {children}

          <Footer></Footer>
        </div>
        <Sideber></Sideber>
      </div>
    </div>
  );
};
Bloglayout.propTypes = {
  children: PropTypes.node,
};
export default Bloglayout;
