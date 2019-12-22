
import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

import DailyReport from "../components/mainComponents/reportCard"
import GraphCard from '../components/mainComponents/graphCard'
import SummaryCard from '../components/mainComponents/summaryCard'
import PaymentCard from '../components/mainComponents/tableCard'

const ConDiv = styled.div`
    margin-left: 20%;
    padding-top: 70px;
    background: #f8f8fa;
    min-height: 100vh
`

const DailyDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

const PaymentDiv = styled.div`
    width: 100%;
    margin-top: 20px;
`

class MainBoard extends Component {
    state = {
        dailyReportData: [
            {
                descrip: "Daily Transaction Volume",
                value: '2,342'
            }, {
                descrip: "Daily Transaction Value",
                value: '#4,000,000'
            }, {
                descrip: "Total Transaction Volume",
                value: "452,000"
            }, {
                descrip: "Total Transaction Value",
                value: "#4,000,000"
            }
        ],
        orderSummary: {
            "Pending Orders": 20,
            "Reconsilled Orders": 80,
            "Total Orders": 100
        },
        paymentsSummary: {
            "Un-nreconcilled Payments": 20,
            "Recondcilled Payment": 80,
            "Total Payments": 100
        }
    }
    render() {
        let DailyRecord = this.state.dailyReportData.map((ele, index) => {
            return (
                <DailyReport key={index}
                    reportHeading={ele.descrip}
                    reportValue={ele.value}
                />)
        })
        return (
            <ConDiv>
                <Container>
                    <DailyDiv style={{ marginTop: "30px" }}>
                        {DailyRecord}
                    </DailyDiv>
                    <DailyDiv style={{ marginTop: "10px" }}>
                        <GraphCard />
                        <div style={{
                            width: "39%",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <SummaryCard order={this.state.orderSummary}> Orders </SummaryCard>
                            <SummaryCard order={this.state.paymentsSummary}> Payments </SummaryCard>
                        </div>
                    </DailyDiv>
                    <PaymentDiv>
                        <PaymentCard />
                    </PaymentDiv>
                </Container>
            </ConDiv>
        )
    }
}

export default MainBoard

