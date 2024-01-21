import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { navLinks } from '../constants';
import {styles} from '../styles';

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <BrowserRouter>
      <nav className={`${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="flex items-center" onClick={()=>{SecurityPolicyViolationEvent(""); window.scrollTo(0, 0)}}>
            <p className="text-white text-[18px] font-bold cursor-pointer">Lam Ching Rou <span className="sm:block hidden">| Aspiring software engineer</span></p>
          </Link>
          <ul className="list-none hidden sm:flex floex-row gap-10">
            {navLinks.map((link) => (
              <li key={link.id} className={`${active === link.title ? "text-white": "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          
        </div>
      </nav>
    </BrowserRouter>
  )
}

export default Navbar