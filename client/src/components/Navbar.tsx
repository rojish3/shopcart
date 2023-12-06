import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between p-2">
        <NavLink to="/">
          <img src={Logo} alt="Shopcart" className="h-12" />
        </NavLink>
        <div>
          <ul className="flex gap-2">
            <li>Categories</li>
            <li>Deals</li>
          </ul>
        </div>
        <div className="flex gap-2">
          <div>Account</div>
          <div>Cart</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
