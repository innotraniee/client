import { useState } from "react";
import { Link } from "react-router";
import PingAnimation from "./PingAnimation";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex h-24 items-center justify-around px-4 md:px-10">
        <Link to="/">
          <div className="flex items-center">
            <img
              src="/innoTraniee.svg"
              alt="logo"
              className="h-16 md:h-20 m-3"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">InnoTraniee</h1>
              <p className="text-sm md:text-lg">Code with confidence</p>
            </div>
          </div>
        </Link>
        <div className="hidden md:flex items-center">
          <ul className="flex gap-7">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li className="relative">
              <Link to="/internships">Internships</Link>
              <PingAnimation/>
            </li>
            <li>
              <Link to="/verification">Verification</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden ">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 p-4">
            <li>
              <Link to="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMobileMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/internships" onClick={toggleMobileMenu}>
                Internships
              </Link>
            </li>
            <li>
              <Link to="/verification" onClick={toggleMobileMenu}>
                Verification
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMobileMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMobileMenu}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
