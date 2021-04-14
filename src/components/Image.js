import React from 'react'

const Image = (props) => {
    const {image} = props
    return (
        <div>
            <img src={image.url}/>
        </div>
    )
}

export default Image
