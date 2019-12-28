import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const MainDiv = styled.div`
    width: 20%;
    padding-top: 100px;
    position: fixed;
    top: 0;
    bottom: 0;
    background: white;
    text-align: left
`

const I = styled.i`
    margin-right: 10px
`

const aStyle ={
    padding: "5px 40px",
    fontSize: "11px",
    color: "#647787",
    textDecoration: "none",
    display: "block",
    lineHeight: "15px"
}

const sideBarComponent = () => {
    return (
        <MainDiv>
            <Button style={{ borderRadius: '20px', fontSize: "12px", fontWeight: "bold", marginBottom: '10px', marginLeft: "30px", padding: "7px 20px" }} variant="success">GENERATE INVOICE</Button>
            <div className="list-unstyled">
                <div>
                    <ul className="list-unstyled sidebarLink">
                        <li> <span style={aStyle}>Main</span></li>
                        <li><NavLink to="/overview" style={aStyle} activeClassName="chosen"><i className="fa fa-lastfm" aria-hidden="true"></i><span style={{ paddingLeft: "10px" }}> Overview </span></NavLink></li>
                    </ul>
                </div>
                <div style={{ paddingBottom: "15px", padding: '0' }}>
                    <ul className="list-unstyled sidebarLink">
                        <li> <span style={aStyle}>Payment</span></li>
                        <li><NavLink to="/dashboard/all-payment" style={aStyle} activeClassName="chosen"> <I className="fa fa-folder-open-o" aria-hidden="true"></I><span style={{ paddingLeft: "10px" }}> All Payments</span></NavLink></li>
                        <li> <NavLink to="/dashboard/Reconcilled-Payments" style={aStyle} activeClassName="chosen"> <I className="fa fa-credit-card" aria-hidden="true"></I><span style={{ paddingLeft: "10px" }}> Reconcilled Payments </span></NavLink></li>
                        <li><NavLink to="/dashboard/UnReconcilled-Payments" style={aStyle} activeClassName="chosen"> <I className="fa fa-credit-card" aria-hidden="true"></I><span style={{ paddingLeft: "10px" }}> Un-Reconcilled Payments </span> </NavLink></li>
                        <li><NavLink to="/dashboard/Manual-Settlement" style={aStyle} activeClassName="chosen"> <I className="fa fa-dot-circle-o" aria-hidden="true"></I><span style={{ paddingLeft: "10px" }}> Manual Settlement</span></NavLink></li>
                    </ul>
                </div>
                <div style={{ paddingBottom: "15px", padding: '0' }}>
                    <ul className="list-unstyled sidebarLink">
                        <li> <span style={aStyle}> Orders </span></li>
                        <li> <NavLink to="/dashboard/Pending-Orders" style={aStyle} activeClassName="chosen"><I className="fa fa-bookmark-o" aria-hidden="true"></I><span style={{ paddingLeft: "10px" }}> Pending Orders</span></NavLink></li>
                        <li><NavLink to="/dashboard/Reconcilled-Orders" style={aStyle} activeClassName="chosen"> <I className="fa fa-hand-lizard-o" aria-hidden="true"></I><span style={{ paddingLeft: "5px" }}> Reconcilled Orders </span> </NavLink></li>
                    </ul>
                </div>
                <div style={{ paddingBottom: "15px", padding: '0' }}>
                    <ul className="list-unstyled sidebarLink">
                        <li><NavLink to="/dashboard/Merchant-Profile" style={aStyle} activeClassName="chosen"><I className="fa fa-user" aria-hidden="true"><span style={{ paddingLeft: "10px" }} > Merchant Profile </span></I></NavLink></li>
                    </ul>
                </div>
            </div>
        </MainDiv>
    )
}
export default sideBarComponent
