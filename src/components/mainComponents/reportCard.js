import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 23%;
    background: white;
    text-align: left;
    line-height: .8rem
    padding: 10px
    display: flex;
    justify-content: space-between;
`

const ReportGraph = styled.div`
    background: linear-gradient(180deg, rgba(2, 148, 255, 0.126274) 33.13%, rgba(255, 255, 255, 0.0001) 117.06%);
    padding: 10px
    width: 30%;
`

const ReportVAlue = styled.span`
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
`

const reportCard = (props) => {
    return (
        <Card>
            <div style={{ width: "60%" }}>
                <p style={{ fontSize: "12px", color: "#787C90" }}>{props.reportHeading}</p>
                <ReportVAlue>{props.reportValue}</ReportVAlue>
            </div>
            <ReportGraph>
            </ReportGraph>
        </Card>
    )
}

export default reportCard
