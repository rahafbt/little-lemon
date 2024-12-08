import { useState } from "react";
import littleLemonLogo from '../assets/Logo.svg';
import menuIcon from '../assets/icon _hamburger menu.svg'
import Nav from "./Nav";

const Header = () => {
  // State to manage navigation visibility
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navigation menu
  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
  };

  return (
    <header>
      <img src={littleLemonLogo} className="logo" alt="Little Lemon Logo" />
      <button onClick={toggleNav} className="menu-button">
        <img src={menuIcon} alt="Menu" />
      </button>
      <Nav isOpen={isNavOpen} />
    </header>
  );
};

export default Header;
