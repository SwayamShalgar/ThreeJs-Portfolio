import { useState } from 'react';
import useDarkMode from '../constants/store.jsx';
// Import navigation links from a constants file
import { navLinks } from '../constants/index.js';

// Functional component to render navigation items
// Accepts an optional onClick handler for closing mobile navigation
const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name} {/* Display link name */}
        </a>
      </li>
    ))}
  </ul>
);



// Navbar Component
const   Navbar = () => {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, setIsDark, Color, setColor } = useDarkMode();
  
  
  const onDarkSet = () => {
    setIsDark(!isDark)
    isDark ? (
    document.body.style.backgroundColor = "#FFF",
    setColor("#afb0b6"),
    document.documentElement.style.setProperty("--nav-hover", "#000")
  )
    :
    (
    document.body.style.backgroundColor = "#010103",
    setColor("#FFF"),
    document.documentElement.style.setProperty("--nav-hover", "#FFF")
    )
}
  // Function to toggle menu open/close state
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  
  // Function to close the menu when a link is clicked (for mobile navigation)
  const closeMenu = () => setIsOpen(false);

  // Function to toggle dark mode


  return (
    // Fixed header to keep the navbar always visible
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
          {/* Logo or brand name */}
          <a href="/" className={`text-neutral-400 font-bold text-xl ${isDark ? 'hover:text-white':'hover:text-black'} transition-colors`}>
            Swayam
          </a>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>
          
          {/* Desktop Navigation - visible on larger screens */}
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
          
          {/* Dark Mode Toggle Button */}
          <button 
            onClick={onDarkSet}
            className={`px-2 border-2 rounded-xl text-neutral-400 text-lg ${isDark ? 'hover:text-white':'hover:text-black'} transition-colors`}
          >
            {!isDark ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Sidebar - controlled by isOpen state */}
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          {/* Close menu when a navigation item is clicked */}
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
