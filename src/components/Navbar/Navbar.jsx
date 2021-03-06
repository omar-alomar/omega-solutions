import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Button} from '../Button/Button'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <img src='/images/logoWhite89.png' className="logo-img" alt="logo"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home 
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                                Portfolio 
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact 
                            </Link>
                        </li>
                        <li>
                        <Link to='/quote' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Get a Quote
                        </Link>
                        </li>
                    </ul>
                    {button && <Link to='/quote'><Button buttonStyle='btn--outline'>Get a Quote</Button></Link>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
