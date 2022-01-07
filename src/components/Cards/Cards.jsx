import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Clean, effective designs.</h1>
            <h2>Check out our portfolio:</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">

                        <CardItem src="images/mba.png" 
                        text="Mildenberg Boender and Associates." 
                        label="Land Development" 
                        path="/portfolio" />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
