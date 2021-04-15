import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
    color: red;
    font-size: 5rem;
`


const Header = (props) => {
    const {title} = props
    return (
        <div>
            <StyledHeader> {title.title}</StyledHeader>
        </div>
    )
}

export default Header