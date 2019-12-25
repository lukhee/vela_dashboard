import React from 'react'
import { withRouter } from "react-router"; 
import styled from "styled-components"

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
    textTransform: "capitalize"
}

const OtherPage = (props)=> {
    console.log(props)
    let Id = props.match.params.id
    return (
        <ConDiv>
            <div style={contentstyle}>
                <h1> {Id} </h1>
            </div>
        </ConDiv>
    )
}

export default withRouter(OtherPage)
