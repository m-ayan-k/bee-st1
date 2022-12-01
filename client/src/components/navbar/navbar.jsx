import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../logo.webp";
import { FaBars, FaTimes } from 'react-icons/fa'

import './navbar.css'

export default function Navbar(){
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/'><img src={Logo} alt='' /></Link>
                </div>
                <ul className={click ? "nav-menu active" : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-link'>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-link'>Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/write' className='nav-link'>Write</Link>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars size={20} style={{ color: '#ffffff' }} />)}

                </div>
            </nav>
        </header>
    )
}