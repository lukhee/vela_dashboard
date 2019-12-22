import React from 'react'
import { Container, Row, Col, Badge, Image, InputGroup, FormControl } from 'react-bootstrap'
import styled from 'styled-components'

// const ConDiv = styled.div`
//     z-index: 200;
//     background: white;
//     position: fixed;
//     top: 0;
//     right: 0;
//     left: 0;
// `

const UL = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    margin-right: 20px;
    font-size: 14px;
    color: #647787;
`

const NameSPan = styled.li`
    display: block;
    font-size: 18px;
    font-weight: 500;
`

const UserLi = styled.li`
    letter-spacing: 0;
    line-height: 1em;
    text-align: right;
`

const NameUl = styled.ul`
    display: flex;
`

const header = (props) => {
    return (
        <Row style={{ padding: "10px", border: "1px solid:silver", boxShadow: "0px 4px 10px rgba(79, 79, 79, 0.07)", zIndex: "200", background: "white", position: "fixed", top: "0", right: "0", left: "0" }}>
            <Col sm={2}>
                <h2 style={{ color: "blue" }}> TransMonitor</h2>
            </Col>
            <Col sm={10} style={{ lineHeight: "40px" }}>
                <Container>
                    <Row>
                        <Col sm={7} style={{ margin: "auto" }}>
                            <InputGroup size="sm" >
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", background: "white" }}><i class="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl style={{ border: "none" }} aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="search ..." />
                            </InputGroup>
                        </Col>
                        <Col sm={5}>
                            <UL className="list-unstyled">
                                <li> Support </li>
                                <li> FAQ </li>
                                <li> <i style={{ position: "relative" }} class="fa fa-bell-o" aria-hidden="true"><Badge style={{
                                    position: "absolute", top: "-8px", left: "6px", color: "white", borderRadius: "15px"
                                }} variant="primary">9</Badge></i></li>
                                <li>
                                    <NameUl className="list-unstyled flex">
                                        <UserLi > Hello
                                                <NameSPan> Oluwaleke Ojo </NameSPan>
                                        </UserLi>
                                        <li> <Image style={{ width: '40px', marginLeft: '5px', paddinBottom: "5px" }} src={'https://res.cloudinary.com/lukhee/image/upload/v1554330555/lukhee2.png'} roundedCircle /> </li>
                                    </NameUl>
                                </li>
                            </UL>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}

export default header
