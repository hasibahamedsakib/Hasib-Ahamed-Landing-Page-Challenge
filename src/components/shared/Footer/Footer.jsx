import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" Container flex items-center justify-between">
      <div>
        <p>Copyright © 2023 All rights reserved by Eyeglass</p>
      </div>
      <div className="space-x-4">
        <Link to="#">Privacy Policy</Link>
        <Link to="#">Terms of service</Link>
      </div>
    </footer>
  );
};

export default Footer;
