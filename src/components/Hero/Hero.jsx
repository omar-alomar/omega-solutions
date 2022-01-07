import React from 'react'
import { Button } from '../Button/Button'
import './Hero.css'
import '../../App.css'

function Hero() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Omega Business Solutions</h1>
            <p>Professional Web Dev for Businesses.</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Call us <i className="fas fa-phone" />
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    Send us an email <i className="fas fa-envelope" />
                </Button>
            </div>
        </div>
    )
}

export default Hero
