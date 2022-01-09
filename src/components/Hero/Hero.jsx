import React from 'react'
import { Button } from '../Button/Button'
import './Hero.css'
import '../../App.css'

function Hero() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Omega Solutions</h1>
            <p>Professional Web Dev for Businesses.</p>
            <div className="hero-btns">
                <span className="btn-span">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Call us <i className="fas fa-phone" />
                </Button></span>
                <span className="btn-span">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Send us an email <i className="fas fa-envelope" />
                </Button></span>
            </div>
        </div>
    )
}

export default Hero
