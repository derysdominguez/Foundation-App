import React from 'react'
import './cards.css'

import Card from './CardItem'
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'

function Cards() {
    return (
        <div class="grid-x grid-padding-x align-center">
            <div class="grid-x grid-padding-x align-center">
                <div className='cell small-3'>
                    <Card 
                    src={img1}
                    title='Amazing'
                    text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, alias tenetur. Perspiciatis cumque libero aspernatur commodi natus, explicabo, dolorem nisi maiores voluptatem officia modi eius esse necessitatibus consectetur quo. Culpa.'
                    />
                </div>

                <div className='cell small-3'>
                    <Card 
                    src={img1}
                    title='Amazing'
                    text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, alias tenetur. Perspiciatis cumque libero aspernatur commodi natus, explicabo, dolorem nisi maiores voluptatem officia modi eius esse necessitatibus consectetur quo. Culpa.'
                    />
                </div>

                <div className='cell small-3'>
                    <Card 
                    src={img1}
                    title='Amazing'
                    text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, alias tenetur. Perspiciatis cumque libero aspernatur commodi natus, explicabo, dolorem nisi maiores voluptatem officia modi eius esse necessitatibus consectetur quo. Culpa.'
                    />
                </div>
            </div>
        </div>
)
}

export default Cards
