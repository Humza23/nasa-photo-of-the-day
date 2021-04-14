import React from 'react'

const Header = ({title}) => {
    return (
        <div>
            <h1 style={{color: 'blue', fontSize: '4rem'}}> {title}</h1>
        </div>
    )
}

export default Header