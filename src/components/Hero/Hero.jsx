import React from 'react'
import { Button } from '../Button/Button'
import './Hero.css'
import '../../App.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Hero() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Omega Solutions</h1>
            <p>Professional Web Dev for Businesses.</p>
            <div className="hero-btns">
                <a href="tel:6672403999" className="btn-span">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Call us <i className="fas fa-phone" />
                </Button></a>
                <span className="btn-span">
                <Link to="/contact">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Send us an email <i className="fas fa-envelope" />
                </Button></Link></span>
            </div>
        </div>
    )
}

export default Hero
