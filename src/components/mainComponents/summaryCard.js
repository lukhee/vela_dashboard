import React from 'react'
import styled from 'styled-components'
import { ProgressBar } from 'react-bootstrap'

const SummaryDiv = styled.div`
    width: 100%;
    background: white;
    text-align: left;
    padding: 10px 40px;
    margin-bottom: 10px
`

const summaryCard = (props) => {
    const order = { ...props.order }
    console.log(order)
    const orderKeys = Object.keys(order)
    let title = orderKeys.map((key, index) => {
        return (
            <div style={{ fontSize: "14px" }} key={index}> {key} : {order[key]} </div>
        )
    })
    return (
        <SummaryDiv>
            <h5> {props.children} </h5>
            <ProgressBar style={{ height: '5px' }}>
                <ProgressBar variant="success" now={80} key={1} />
                <ProgressBar variant="warning" now={20} key={2} />
            </ProgressBar>
            {title}
        </SummaryDiv>
    )
}

export default summaryCard
