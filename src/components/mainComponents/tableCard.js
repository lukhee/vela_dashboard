import React from 'react';
import styled from 'styled-components'
import { InputGroup, FormControl, Container } from 'react-bootstrap'
import { MDBCard, MDBCardBody, MDBCardHeader, MDBTable, MDBTableBody, MDBTableHead, MDBPagination, MDBPageItem, MDBPageNav, } from 'mdbreact';

const ConDiv = styled.div`
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
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i> Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
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
            }, {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i> Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
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
            }, {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i> Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
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
            }, {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i> Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
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
            }, {
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i> Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
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
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i> Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
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
            },{
                'type': <div><div className='avatar-circle'><span className='initials'>VW</span></div> Apple Mac Book 15 250 SSD 12GB </div>,
                'price': '$73430',
                'id': '124576789',
                'time': '12:30',
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i> Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
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
                'status': <div className="d-flex justify-content-between"><div className="p-1 px-2 rounded-pill w-75 text-success border"> <i className="fa fa-circle mr-1" aria-hidden="true"></i> Reconcilled </div> <i className="fa fa-angle-down m-auto" aria-hidden="true"></i></div>,
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

    let rowStatus = props.rowStatus
    let rowCount = props.rowCount
    let rows
    if(rowStatus === "all" && rowCount===10){
        changeFuncState()
    } else if(rowStatus !== "all"){
        rows = data_panel.rows.filter(item =>{
            let items = item.status.props.children[0].props.children[2]
            return "Reconcilled" === items
        })
    } else {
        changeFuncState()
    }
    function changeFuncState(){
        rows = data_panel.rows.filter((item, index) => {
            if (index < rowCount) return true
            return false
        })
    }

    function searchInput(event){
        let value = event.target.value
        console.log(value)
    }
    const changeLength = (event) => {
        const len = event.target.value
        props.rowChange(len)
    }


    return (
        <ConDiv>
            <MDBCardHeader className=" d-flex justify-content-between align-items-center py-3 px-0 border-bottom-0" style={{ fontFamily: "Segoe UI !important", fontSize: "13px", lineHeight: "17px", textAlign: "left" }}>
                <div style={{ width: "30%" }}>
                    Showing <select style={{ background: "rgb(247, 247, 247)" }} className="mx-2 text-primary border-0 bg-none" onChange={changeLength} value={rowCount}> 
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                    out of {data_panel.rows.length} payments
                    </div>
                <div style={{ width: "40%" }}>
                    <InputGroup size="sm" >
                        <InputGroup.Prepend style={{ color: "#787878", fontSize: "11px" }}>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", borderBottom: "0.5px solid #787878", borderRadius: "0px", background: "#f7f7f7" }}><i className="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl onChange={searchInput} style={{ border: "none", borderBottom: "1px solid grey", borderRadius: "0px", background: "#f7f7f7" }} aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search payments ..." />
                    </InputGroup>
                </div>
                <div style={{ width: "30%", paddingLeft: "40px" }} 
                    value={rowStatus}
                    onChange={changeLength}
                    >
                    Show <select style={{ background: "#f7f7f7" }} className="ml-3 p-1 border">
                        <option value="all">All</option>
                        <option value="Reconcilled">Reconcilled</option>
                        <option value="Un-Reconcilled">Un-Reconcilled</option>
                        <option value="Settled">Settled</option>
                        <option value="Un-Settled">Un-Settled</option>
                    </select>
                </div>
            </MDBCardHeader>
            <Container>
                <MDBCard narrow className=" border-0" style={{ contentstyle }}>
                    <MDBCardBody cascade className="text-left p-0">
                        <MDBTable btn fixed>
                            <MDBTableHead columns={data_panel.columns} />
                            <MDBTableBody rows={rows} />
                        </MDBTable>
                    </MDBCardBody>
                </MDBCard>
                <div style={{ fontSize: "13px", lineHeight: "17px" }} className="d-flex justify-content-between align-items-end p-2"> <div style={{lineHeight: "35px"}}>Showing 1 to {rows.length} of {data_panel.rows.length} entries</div> <div>
                    <MDBPagination className="mb-0">
                        <MDBPageItem disabled>
                            <MDBPageNav aria-label="Previous">
                                <span aria-hidden="true">Previous</span>
                            </MDBPageNav>
                        </MDBPageItem>
                        <MDBPageItem active>
                            <MDBPageNav>
                                1 <span className="sr-only">(current)</span>
                            </MDBPageNav>
                        </MDBPageItem>
                        <MDBPageItem>
                            <MDBPageNav>2</MDBPageNav>
                        </MDBPageItem>
                        <MDBPageItem>
                            <MDBPageNav>3</MDBPageNav>
                        </MDBPageItem>
                        <MDBPageItem>
                            <MDBPageNav aria-label="Previous">
                                <span aria-hidden="true">Next</span>
                            </MDBPageNav>
                        </MDBPageItem>
                    </MDBPagination> 
                </div></div>
            </Container>
        </ConDiv>
    );
};

export default TablePage;