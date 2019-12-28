
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
`

class MainBoard extends Component {
    state = {
        dailyReportData: {
            daily: [
                {
                    id: 2,
                    descrip: "Daily Transaction Volume",
                    value: '2,342'
                }, {
                    id: 3,
                    descrip: "Daily Transaction Value",
                    value: '#4,000,000'
                },
            ], 
            total: [{
                id: 4,
                descrip: "Total Transaction Volume",
                value: "452,000"
            }, {
                id: 5,
                descrip: "Total Transaction Value",
                value: "#4,000,000"
            }]
        },
        orderSummary: {
            "Pending Orders": 20,
            "Reconsilled Orders": 80,
            "Total Orders": 100
        },
        paymentsSummary: {
            "Un-nreconcilled Payments": 20,
            "Recondcilled Payment": 80,
            "Total Payments": 100
        },
        TableDataInfo: {
            rowCount: 10,
            rowStatus: "all"
        }
    };

    changeTableLength = (len) => {
        let TableDataInfo = { ...this.state.TableDataInfo }
        if (!isNaN(len)) {
            TableDataInfo.rowCount = len
           return this.setState({ TableDataInfo })
        }
        TableDataInfo.rowStatus = len
        return this.setState({ TableDataInfo })
    }

    render() {
        let DailyRecord = this.state.dailyReportData.daily.map((ele, index) => {
            return (
                <DailyReport key={ele.id}
                    reportHeading={ele.descrip}
                    reportValue={ele.value}
                />)
        })
        return (
            <ConDiv>
                <Container className="px-3">
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div style={{ marginTop: "30px", width: "47%", display: "flex", justifyContent: "space-between" }}>
                            {DailyRecord}
                        </div>
                        <div style={{ marginTop: "30px", width: "47%", display: "flex", justifyContent: "space-between" }}>
                            {DailyRecord}
                        </div>
                    </div>
                    <DailyDiv className="mt-4">
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
                </Container>
                <Container className="px-4" style={{fontSize: "36px", lineHeight: "48px"}}>
                    Payments
                </Container >
                    <PaymentDiv>
                    <PaymentCard 
                        rowCount={this.state.TableDataInfo.rowCount}
                        rowStatus={this.state.TableDataInfo.rowStatus}
                        rowChange={this.changeTableLength}/>
                    </PaymentDiv>
            </ConDiv>
        )
    }
}

export default MainBoard

