import React from 'react';
import { MDBDataTable } from 'mdbreact';

const tableCard = () => {
    const data = {
        columns: [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Position',
                field: 'position',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Office',
                field: 'office',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Age',
                field: 'age',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Start date',
                field: 'date',
                sort: 'asc',
                width: 150
            },
            {
                label: '',
                field: 'salary',
                sort: 'asc',
                width: 100
            }
        ],
        rows: [
            {
                name: 'Tiger Nixon',
                position: 'System Architect',
                office: 'Edinburgh',
                age: '61',
                date: '2011/04/25',
                salary: 'V'
            },
            {
                name: 'Garrett Winters',
                position: 'Accountant',
                office: 'Tokyo',
                age: '63',
                date: '2011/07/25',
                salary: 'V'
            },
            {
                name: 'Ashton Cox',
                position: 'Junior Technical Author',
                office: 'San Francisco',
                age: '66',
                date: '2009/01/12',
                salary: 'V'
            },
            {
                name: 'Cedric Kelly',
                position: 'Senior Javascript Developer',
                office: 'Edinburgh',
                age: '22',
                date: '2012/03/29',
                salary: 'V'
            },
            {
                name: 'Airi Satou',
                position: 'Accountant',
                office: 'Tokyo',
                age: '33',
                date: '2008/11/28',
                salary: 'V'
            },
            {
                name: 'Brielle Williamson',
                position: 'Integration Specialist',
                office: 'New York',
                age: '61',
                date: '2012/12/02',
                salary: 'V'
            },
            {
                name: 'Herrod Chandler',
                position: 'Sales Assistant',
                office: 'San Francisco',
                age: '59',
                date: '2012/08/06',
                salary: 'V'
            },
            {
                name: 'Rhona Davidson',
                position: 'Integration Specialist',
                office: 'Tokyo',
                age: '55',
                date: '2010/10/14',
                salary: 'V'
            },
            {
                name: 'Colleen Hurst',
                position: 'Javascript Developer',
                office: 'San Francisco',
                age: '39',
                date: '2009/09/15',
                salary: 'V'
            },
            {
                name: 'Sonya Frost',
                position: 'Software Engineer',
                office: 'Edinburgh',
                age: '23',
                date: '2008/12/13',
                salary: 'V'
            },
            {
                name: 'Jena Gaines',
                position: 'Office Manager',
                office: 'London',
                age: '30',
                date: '2008/12/19',
                salary: 'V'
            },
            {
                name: 'Quinn Flynn',
                position: 'Support Lead',
                office: 'Edinburgh',
                age: '22',
                date: '2013/03/03',
                salary: 'V'
            },
            {
                name: 'Charde Marshall',
                position: 'Regional Director',
                office: 'San Francisco',
                age: '36',
                date: '2008/10/16',
                salary: 'V'
            },
            {
                name: 'Haley Kennedy',
                position: 'Senior Marketing Designer',
                office: 'London',
                age: '43',
                date: '2012/12/18',
                salary: 'V'
            },
            {
                name: 'Tatyana Fitzpatrick',
                position: 'Regional Director',
                office: 'London',
                age: '19',
                date: '2010/03/17',
                salary: 'V'
            },
            {
                name: 'Michael Silva',
                position: 'Marketing Designer',
                office: 'London',
                age: '66',
                date: '2012/11/27',
                salary: 'V'
            },
            {
                name: 'Paul Byrd',
                position: 'Chief Financial Officer (CFO)',
                office: 'New York',
                age: '64',
                date: '2010/06/09',
                salary: 'V'
            },
            {
                name: 'Gloria Little',
                position: 'Systems Administrator',
                office: 'New York',
                age: '59',
                date: '2009/04/10',
                salary: 'V'
            },
            {
                name: 'Bradley Greer',
                position: 'Software Engineer',
                office: 'London',
                age: '41',
                date: '2012/10/13',
                salary: 'V'
            },
            {
                name: 'Dai Rios',
                position: 'Personnel Lead',
                office: 'Edinburgh',
                age: '35',
                date: '2012/09/26',
                salary: 'V'
            },
            {
                name: 'Jenette Caldwell',
                position: 'Development Lead',
                office: 'New York',
                age: '30',
                date: '2011/09/03',
                salary: 'V'
            },
            {
                name: 'Yuri Berry',
                position: 'Chief Marketing Officer (CMO)',
                office: 'New York',
                age: '40',
                date: '2009/06/25',
                salary: 'V'
            },
            {
                name: 'Caesar Vance',
                position: 'Pre-Sales Support',
                office: 'New York',
                age: '21',
                date: '2011/12/12',
                salary: 'V'
            },
            {
                name: 'Doris Wilder',
                position: 'Sales Assistant',
                office: 'Sidney',
                age: '23',
                date: '2010/09/20',
                salary: 'V'
            },
            {
                name: 'Angelica Ramos',
                position: 'Chief Executive Officer (CEO)',
                office: 'London',
                age: '47',
                date: '2009/10/09',
                salary: 'V'
            },
            {
                name: 'Gavin Joyce',
                position: 'Developer',
                office: 'Edinburgh',
                age: '42',
                date: '2010/12/22',
                salary: 'V'
            }
        ]
    };

    return (
        <MDBDataTable
            // striped
            bordered
            small
            data={data}
        />
    );
}

export default tableCard;