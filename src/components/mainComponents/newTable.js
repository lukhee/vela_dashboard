import React from 'react';
import styled from 'styled-components'
import { InputGroup, FormControl } from 'react-bootstrap'
import { MDBCard, MDBCardBody, MDBCardHeader, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const ConDiv = styled.div`
    margin-left: 20%;
    padding-top: 70px;
    background: #f8f8fa;
    min-height: 100vh;
    text-align: center;
`

const contentstyle = {
    margin: "10px",
    // background: "white",
    minHeight: "80vh",
    color: "red",
    textTransform: "capitalize"
}


const TablePage = (props) => {
    const data_panel = {
        columns: [
            {
                'label': 'Item Type',
                'field': 'type',
                'sort': 'asc'
            },
            {
                'label': 'Price',
                'field': 'Price',
                'sort': 'asc'
            },
            {
                'label': 'Transaction No',
                'field': 'id',
                'sort': 'asc'
            },
         {
                'label': 'Time',
                'field': 'time',
                'sort': 'asc'
            },
            {
                'label': 'Status',
                'field': 'status',
                'sort': 'asc'
            },
        ],
        rows: [
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-muted border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Un-reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-warning border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Pending </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-muted border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Un-reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-warning border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Pending </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-muted border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Un-reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-warning border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Pending </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-muted border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Un-reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-warning border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Pending </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-muted border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Un-reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-warning border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Pending </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-muted border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Un-reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-warning border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Pending </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-muted border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Un-reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-warning border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Pending </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            }, 
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-muted border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Un-reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-warning border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Pending </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-muted border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Un-reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
            {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-warning border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i>  Pending </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
            },
        ]
    };

    return (
        <ConDiv>
            <MDBCardHeader className=" d-flex justify-content-between align-items-center py-2 mx-4 border-bottom-0" style={{ fontFamily: "Segoe UI !important", fontSize: "13px", lineHeight: "17px", textAlign: "left" }}>
                <div style={{ width: "30%" }}>
                    Showing <select style={{ background: "rgb(247, 247, 247)" }} className="mx-2 text-primary border-0 bg-none">
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                    </select>
                    out of {data_panel.rows.length} payments
                    </div>
                <div style={{ width: "40%" }}>
                    <InputGroup size="sm" >
                        <InputGroup.Prepend style={{ color: "#787878", fontSize: "11px" }}>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", borderBottom: "0.5px solid #787878", borderRadius: "0px", background: "#f7f7f7" }}><i className="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl style={{ border: "none", borderBottom: "1px solid grey", borderRadius: "0px", background: "#f7f7f7" }} aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="search ..." />
                    </InputGroup>
                </div>
                <div style={{ width: "30%", paddingLeft: "40px" }}>
                    Show <select style={{ background: "#f7f7f7" }} className="ml-3 p-1 border">
                        <option>All</option>
                        <option>Reconcilled</option>
                        <option>Un-Reconcilled</option>
                        <option>Settled</option>
                        <option>Un-Settled</option>
                    </select>
                </div>
            </MDBCardHeader>
            <MDBCard narrow  className=" border-0" style={{ contentstyle}}>
                <MDBCardBody cascade className="text-left p-0">
                    <MDBTable btn fixed>
                        <MDBTableHead columns={data_panel.columns} />
                        <MDBTableBody rows={data_panel.rows} />
                    </MDBTable>
                </MDBCardBody>
            </MDBCard>
            <div className="d-flex justify-content-between align-items-end p-2"> <div>page number</div> <div> Pagination </div></div>
        </ConDiv>
    );
};

export default TablePage;