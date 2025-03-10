import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { LuAlignRight } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');
  const [fontColor, setFontColor] = useState('white');
  const [boxShadow, setBoxShadow] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor('white');
        setFontColor('black');
        setBoxShadow('0px 4px 10px rgba(0, 0, 0, 0.1)');
      } else {
        setBgColor('transparent');
        setFontColor('white');
        setBoxShadow('none');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fstyle navbar navbar-expand-md navbar-light fixed-top px-3 py-0 ps-0 pe-0 align-items-start" 
      style={{ backgroundColor: bgColor, transition: "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out", boxShadow }}>
      <Link className="navbar-brand bg-light px-3 rounded-start-0 rounded-bottom-circle me-0" to="/" style={{ boxShadow: "1px 1px 15px black" }}>
        <img src={require('../../Assets/images/logopngCropR.png')} alt="Logo" height={100} width={100} className="img-fluid" />
      </Link>
      <button className="navbar-toggler ms-auto py-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded={isOpen}
        aria-label="Toggle navigation"
        onClick={() => setIsOpen(!isOpen)}>
        <span className="navbar-toggler-icon">
          {isOpen ? <IoCloseSharp className='text-light fs-3' /> : <LuAlignRight className='fs-3' style={{ color: fontColor }} />}
        </span>
      </button>
      <div className={`offcanvas offcanvas-end d-block d-md-none ${isOpen ? 'show' : ''}`} style={{ width: '100%', background: '#75b83a42', position: 'fixed', top: 0, right: 0, height: '100vh', transition: 'transform 1s ease-in-out', transform: isOpen ? 'translateX(0)' : 'translateX(100%)', visibility: "visible" }}>
        <div className='ms-auto bg-light h-100' style={{ width: '250px' }}>
          <div className="offcanvas-header justify-content-end p-3">
            <button className="btn" onClick={() => setIsOpen(false)}>
              <IoCloseSharp className='fs-3' />
            </button>
          </div>
          <div className="offcanvas-body p-3" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link text-center rounded-0 ${location.pathname === "/" ? "active" : ""}`} to="/" onClick={() => setIsOpen(false)} style={{ color: 'black', margin: "10px 0px 10px 0px" }}><FaHome className='fs-3' /></Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-center rounded-0 ${location.pathname === "/about" ? "active" : ""}`} to="/about" onClick={() => setIsOpen(false)} style={{ color: 'black', margin: "10px 0px 10px 0px" }}>About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-center rounded-0 ${location.pathname === "/howto" ? "active" : ""}`} to="/howto" onClick={() => setIsOpen(false)} style={{ color: 'black', margin: "10px 0px 10px 0px" }}>How To</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-center rounded-0 ${location.pathname === "/product" ? "active" : ""}`} to="/product" onClick={() => setIsOpen(false)} style={{ color: 'black', margin: "10px 0px 10px 0px" }}>Product</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-center rounded-0 ${location.pathname === "/contact" ? "active" : ""}`} to="/contact" onClick={() => setIsOpen(false)} style={{ color: 'black', margin: "10px 0px 10px 0px" }}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-collapse d-md-block d-none justify-content-end pb-1" id="navbarNav">
        <ul className="navbar-nav pt-3 px-3 ulbg" >
          <li className="nav-item">
            <Link className={`nav-link px-4 mx-1 ${location.pathname === "/" ? "active" : ""}`} to="/" style={{ color: fontColor }}>
              <FaHome className='fs-4' style={{ color: fontColor }} />
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link px-4 mx-1 fs-6 ${location.pathname === "/about" ? "active" : ""}`} to="/about" style={{ color: fontColor }}>About</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link px-4 mx-1 fs-6 ${location.pathname === "/howto" ? "active" : ""}`} to="/howto" style={{ color: fontColor }}>How To</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link px-4 mx-1 fs-6 ${location.pathname === "/product" ? "active" : ""}`} to="/product" style={{ color: fontColor }}>Product</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link px-4 mx-1 fs-6 ${location.pathname === "/contact" ? "active" : ""}`} to="/contact" style={{ color: fontColor }}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
