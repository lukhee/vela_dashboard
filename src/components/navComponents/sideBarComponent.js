import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const MainDiv = styled.div`
    width: 20%;
    padding-top: 100px;
    z-index: -1;
    position: fixed;
    top: 0;
    bottom: 0;
    background: white;
    text-align: left
`

const Li = styled.li`
    padding: 5px 20px;
    font-size: 12px;
    color: #647787;
`

const I = styled.i`
    margin-right: 10px
`

const sideBarComponent = (props)=> {
    return (
        <div>
            <MainDiv>
                <Button style={{ borderRadius: '20px', fontSize: "12px", fontWeight: "bold", marginBottom: '10px', marginLeft: "30px" }} variant="success">GENERATE INVOICE</Button>
                <ul className="list-unstyled">
                    <Li style={{ paddingBottom: "15px" }}>
                        <ul className="list-unstyled">
                            <Li> Main </Li>
                            <Li><NavLink to="/dashBoard" activeClassName="chosen"><i class="fa fa-lastfm" aria-hidden="true"></i><span style={{ paddingLeft: "10px" }}> Overview </span></NavLink></Li>
                        </ul>
                    </Li>
                    <Li style={{ paddingBottom: "15px" }}>
                        <ul className="list-unstyled">
                            <Li> <span>Payment</span></Li>
                            <Li> <i class="fa fa-folder-open-o" aria-hidden="true"> <span style={{ paddingLeft: "10px" }}> All Payments</span></i></Li>
                            <Li> <i class="fa fa-credit-card" aria-hidden="true"></i><span style={{ paddingLeft: "10px" }}> Reconcilled Payments </span> </Li>
                            <Li> <i class="fa fa-credit-card" aria-hidden="true"></i><span style={{ paddingLeft: "10px" }}> Un-Reconcilled Payments </span> </Li>
                            <Li> <i class="fa fa-dot-circle-o" aria-hidden="true"> <span style={{ paddingLeft: "10px" }}> Manual Settlement</span> </i> </Li>
                        </ul>
                    </Li>
                    <Li style={{ paddingBottom: "15px" }}>
                        <ul className="list-unstyled">
                            <Li> <span> Orders </span></Li>
                            <Li> <i class="fa fa-bookmark-o" aria-hidden="true"></i><span style={{ paddingLeft: "10px" }}> All Orders </span></Li>
                            <Li> <i class="fa fa-id-card-o" aria-hidden="true"></i><span style={{ paddingLeft: "10px" }}> Pending Orders</span></Li>
                            <Li> <i class="fa fa-hand-lizard-o" aria-hidden="true"></i><span style={{ paddingLeft: "10px" }}> Reconcilled Orders </span> </Li>
                        </ul>
                    </Li>
                    <Li style={{ paddingBottom: "15px" }}>
                        <ul className="list-unstyled">
                            <Li><I className="fa fa-user" aria-hidden="true"><span style={{ paddingLeft: "10px" }}> Merchant Profile </span></I></Li>
                        </ul>
                    </Li>
                </ul>
            </MainDiv>
        </div>
    )
}

export default sideBarComponent
