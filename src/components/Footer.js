import React from 'react'
import styled from 'styled-components'


const StyledH2 = styled.h2`
    border: 8px solid red;
    padding: 1rem;
    display: flex;
    justify-content: center;
    margin: 2rem auto;

`


const Footer = ({name}) => {
    return (
        <div>
            <StyledH2> {name} </StyledH2>
        </div>
    )
}

export default Footer
