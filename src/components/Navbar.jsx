import {
  
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/Users/arne/Documents/GitHub/Food-Catering-Service-Landing-Page/src/images/footer/chef-hat.png";
import CustomButton from "./CustomButton";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const goTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };

  const openMobile = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <nav className={sticky ? "sticky-nav" : ""}>
        <div className="navbar">
          <Link to="/">
            <div className="navbar__img">
            <img onClick={goTop} src={logo} alt="" />
            </div>
          </Link>
          <ul>
            <li>
              <a href="#home">About</a>
            </li>
            <li>
              <a href="#menu">Menus</a>
            </li>
            <li>
              <a href="#choose-us">Pricing</a>
            </li>
            <li>
              <a href="#join">Services</a>
            </li>
          </ul>
          <CustomButton buttonText="Get the App" />
          {/* mobile */}
          <IconMenu2 onClick={openMobile} className="hamburger-menu" />
        </div>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
        <IconX onClick={openMobile} className="close-mobile" />
        <ul>
          <li onClick={openMobile}>
            <a href="#home">About</a>
          </li>
          <li onClick={openMobile}>
            <a href="#Work">Menus</a>
          </li>
          <li onClick={openMobile}>
            <a href="#choose-us">Pricing</a>
          </li>
          <li onClick={openMobile}>
            <a href="#join">Services</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
