import { FaLinkedinIn, FaTimes } from 'react-icons/fa';
import { FaBehance, FaFacebookF, FaGithub } from 'react-icons/fa6';
import { NavLink, Link } from '../../../node_modules/react-router-dom';
import { useContext } from 'react';

const OffCanvasMenu = ({ isOpen, onLinkClick }) => {
  // Define the menu items and social links
  const menuItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Projects", url: "/projects" },
    { name: "Project Details", url: "/project-details" },
    { name: "Blog", url: "/blog" },
  ];

  const socialLinks = [
    { icon: <FaBehance />, url: "https://www.behance.net/hmyousuf5" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/hmyousuf2010/" },
    { icon: <FaFacebookF />, url: "https://www.facebook.com/hmyousuf3.0" },
    { icon: <FaGithub />, url: "https://github.com/dev-hmyousuf" },
  ];

  return (
    <div>
      <div className={`fixed z-[99999] top-0 right-0 h-full justify-between bg-black p-6 transition-transform duration-300 flex-col md:flex gap-3 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <Link to="/" className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark dark:text-white">
              {/* Logo SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                <path fill="white" d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"></path>
              </svg>
              <span className='text-orange-500'> H.M.<span className="text-white">YOUSUF</span> </span>
            </Link>
            <button onClick={onLinkClick} aria-label="Close menu" className="text-white bg-orange-500 p-5 cursor-pointer">
              <FaTimes size={24} />
            </button>
          </div>
          <nav role="navigation">
            <ul>
              {menuItems.map((item, index) => (
                <li key={index} className="border-b border-border-white py-4 group">
                  <NavLink
                  to={item.url} // Use 'to' prop instead of 'href'
                  className="text-white text-xl font-bold flex justify-between items-center hover:text-orange transition duration-300"
                  onClick={onLinkClick} // Close the menu when a link is clicked
                  >
                    {item.name}
                    <span className="inline-block group-hover:animate-arrow-move-up">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <nav>
            <ul className="flex md:flex-col gap-6 items-center">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url} // Use 'href' here for external links
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl transition-all duration-300 hover:text-orange"
                    onClick={onLinkClick} // Close the menu when a social link is clicked
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
