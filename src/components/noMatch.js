import React from 'react'
import styled from 'styled-components'

const ConDiv = styled.div`
    margin-left: 20%;
    padding-top: 70px;
    background: #f8f8fa;
    min-height: 100vh;
    text-align: center;
`

const contentstyle = {
    margin: "10px",
    background: "white",
    minHeight: "80vh",
    color: "red",
    textTransform: "capitalize"
}

const noMatch = ()=> {
    return (
        <ConDiv>
            <div style={contentstyle}>
                <h3>not Found</h3>
            </div>
        </ConDiv>
    )
}

export default noMatch
