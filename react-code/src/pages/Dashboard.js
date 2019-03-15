import React, { Component } from 'react';
//import Datatable from '../components/Datatable';
import Iconcard from '../components/Iconcard';



export default class Dashboard extends Component {
    render() {
        return (
            <div id="dashboard">
                <div className="row">
                    <Iconcard color='bg-primary' title='26 New Messages!' icon='fa-comments' />
                    <Iconcard color='bg-warning' title='11 New Tasks!' icon='fa-list' />
                    <Iconcard color='bg-success' title='123 New Orders!' icon='fa-shopping-cart' />
                    <Iconcard color='bg-danger' title='13 New Tickets!' icon='fa-life-ring' />
                </div>
            </div>
        )
    }
}

