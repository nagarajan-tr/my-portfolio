import React, { useState } from 'react'
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false); 
return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />

        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Technologies</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Experience</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Projects</Link>
        </div>
        <button className="desktopMenubtn" onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }}>
            <img src={contactImg} alt="" className='desktopMenuImg' /> Contact Me
        </button>

        <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
        <div className="navMenu" style={showMenu ? { display: 'flex' } : { display: 'none' }}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Technologies</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Experience</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
        </div>

    </nav>
)
}

export default Navbar
