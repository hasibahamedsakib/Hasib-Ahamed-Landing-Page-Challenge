//=> website logo
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";

import { FaUser } from "react-icons/fa6";

import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-[75px] px-2 py-7 text-primary font-Jost">
      <Link
        to="/"
        className="scale-100 rounded-2xl transition-all duration-200 hover:scale-110"
      >
        <img src={logo} alt="website logo" />
      </Link>
      <ul className="flex items-center justify-between gap-7 text-slate-900">
        <Link to="#">Home</Link>
        <Link to="#">About Us</Link>
        <Link to="#">Products</Link>
        <Link to="#">Features</Link>
        <Link to="#">Reviews</Link>
        <Link to="#">Contact Us</Link>
      </ul>
      <ul className="flex items-center gap-4">
        <li className="cursor-pointer rounded-full  ">
          <FaCartShopping size={22} />
        </li>
        <li className="cursor-pointer rounded-full  ">
          <FaUser size={22} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
