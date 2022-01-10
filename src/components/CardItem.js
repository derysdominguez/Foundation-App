import React from 'react'

function CardItem(props) {
    return (
        <div class="card">
            <img src={props.src} />
            <div class="card-section text-center">
                <h4>{props.title}</h4>
                <p>{props.text}</p>
                <button class="hollow button secondary">See more</button>
            </div>
        </div>
    )
}

export default CardItem
