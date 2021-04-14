import React from 'react'

const Header = (props) => {
    const {title} = props
    return (
        <div>
            <h1 style={{color: 'blue', fontSize: '4rem'}}> {title.title}</h1>
        </div>
    )
}

export default Header