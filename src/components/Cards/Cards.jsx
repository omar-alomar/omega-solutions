import { Button } from '../Button/Button'
import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Slider from './Slider'


function Cards() {
    return (
        <div className="cards">
            <h1>Clean, effective designs.</h1>
            <h2>Check out our portfolio:</h2>
            <Slider />
            {/* <div className="cards__container">
                <div className="cards__wrapper">
                </div>
            </div> */}
            <div className="btn-container">
                <Button className="get-started" buttonStyle='btn--black'>Get Started Now</Button>
            </div>
        </div>
    )
}

export default Cards
