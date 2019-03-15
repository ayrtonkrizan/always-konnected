import React, { Component } from 'react';
import {Link} from 'react-router';
export default class Iconcard extends Component {
    render(){
        return (
            <div className="col-xl-3 col-sm-6 mb-3">
                <div className={`card text-white ${this.props.color} o-hidden h-100`}>
                <div className="card-body">
                    <div className="card-body-icon">
                    <i className={`fas fa-fw ${this.props.icon}`}></i>
                    </div>
                    <div className="mr-5">{this.props.title}</div>
                </div>
                <Link className="card-footer text-white clearfix small z-1" to="#">
                    <span className="float-left">Detalhes</span>
                    <span className="float-right">
                    <i className="fas fa-angle-right"></i>
                    </span>
                </Link>
                </div>
            </div>
        )
    }
}

