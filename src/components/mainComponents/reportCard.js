import React from 'react'
import styled from 'styled-components'
import { Image } from 'react-bootstrap'

const Card = styled.div`
    width: 48%;
    background: white;
    text-align: left;
    line-height: .8rem;
    padding: 10px;
    // margin-right: 20px;
    display: flex;
    justify-content: space-between;
`

const ReportGraph = styled.div`
    padding: 5px
    width: 30%;
`

const ReportValue = styled.span`
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
`

const reportCard = (props) => {
    return (
        <Card>
            <div style={{ width: "65%" }}>
                <p style={{ fontSize: "12px", color: "#787C90" }}>{props.reportHeading}</p>
                <ReportValue>{props.reportValue}</ReportValue>
            </div>
            <ReportGraph>
                <Image src="graph1.png" />
            </ReportGraph>
        </Card>
    )
}

export default reportCard
