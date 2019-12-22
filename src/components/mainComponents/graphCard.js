import React from 'react'
import styled from 'styled-components'
import { Form, Image } from 'react-bootstrap'

const GraphDiv = styled.div`
    width: 60%;
    background: white;
    margin-bottom: 10px;
    padding: 5px 10px 0px 10px;
`
const HDiv = styled.div`
    display: flex;
    justify-content: space-between
`

const graphCard = () => {
    return (
        <GraphDiv>
            <HDiv>
                <h4>Today: 5, Aujust 2019</h4>
                <div style={{ display: 'flex' }}>
                    <Form.Group controlId="formGridState" style={{ width: "200px" }}>
                        <Form.Control size="sm" as="select">
                            <option>1Jan - 1Jun </option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <div style={{ display: "flex" }}>
                        <span style={{ marginBottom: "0", marginTop: "3px" }}><i style={{ borderRadius: "4px", color: "#CCCFD4", background: '#cccfd433', marginLeft: '20px', border: '1px solid #CCCFD4', padding: "0 7px" }} class="fa fa-angle-left" aria-hidden="true"></i></span>
                        <span style={{ marginBottom: "0", marginTop: "3px" }}><i style={{ borderRadius: "4px", color: "#CCCFD4", background: '#cccfd433', padding: "0 7px", marginLeft: '10px', border: '1px solid #CCCFD4' }} class="fa fa-angle-right" aria-hidden="true"></i></span>
                    </div>
                </div>
            </HDiv>
            <div style={{ position: "relative" }}>
                <div style={{ textAlign: 'center' }}>Graph</div>
                <div>
                    <Image style={{ width: '100%' }} src="Gradient.png" rounded />
                </div>
            </div>
        </GraphDiv>
    )
}
export default graphCard
