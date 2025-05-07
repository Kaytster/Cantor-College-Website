'use client'
import Link from 'next/link';
import "./navbar.css";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <button className='burger' onClick={toggleMenu}>&#9776;</button>
      <menu className={menuOpen ? "active" : ""}>
        <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link href="/facilities" onClick={toggleMenu}>Facilities</Link></li>
        <li><Link href="/courses" onClick={toggleMenu}>Courses</Link></li>
        <li><Link href="/resources" onClick={toggleMenu}>Resources</Link></li>
        <li><Link href="/staff" onClick={toggleMenu}>Staff</Link></li>
        <li><Link href="/students" onClick={toggleMenu}>Students</Link></li>
        <li><Link href="/businesses" onClick={toggleMenu}>Businesses</Link></li>
        <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
      </menu>
    </nav>
  );
};

export default Navbar;

