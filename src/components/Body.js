import React from 'react'
import Image from './Image.js'

const Body = (props) => {
const {image} = props
    return (
        <div>
            <img src={image.url}/>
        </div>
    )
}

export default Body