import React from 'react'
import styled from 'styled-components'

const GraphDiv = styled.div`
    width: 60%;
    background: white;
    margin-bottom: 10px;
`

const graphCard = () => {
    return (
        <GraphDiv>
            <h3>Today: 5, Aujust 2019</h3>
        </GraphDiv>
    )
}

export default graphCard
