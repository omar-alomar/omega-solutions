import React from 'react'
import './QuoteForm.css'

function QuoteForm() {
    return (
        <>
            <h1 className="quote-heading">Get a Quote</h1>
            <h4 className="quote-heading2">Fill out the form below and we will get back to you promptly.</h4>
            <div className="quote-wrapper">
                <p align="center"><iframe className="quote" src="https://docs.google.com/forms/d/e/1FAIpQLSc3R6zjj1Y5FVHhfsqZGBEmm71GIqNHXVMl9AQOvLBoJd4elQ/viewform?embedded=true" 
                width="640" height="1559" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">Loading…</iframe></p>
            </div>
        </>
    )
}

export default QuoteForm
