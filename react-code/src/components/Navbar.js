import React, { Component } from 'react';
import {Link} from 'react-router';

export class NavSearch extends Component {
    render() {
        return (
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export class NavItem extends Component {
    constructor(){
        super();
        this.state = {show: false}
    }
    
    showList = e => {
        e.preventDefault();
        this.setState({show: !this.state.show})
    }

    render() {
        return (
            <li className={`nav-item dropdown no-arrow mx-1 ${this.state.show? 'show': ''}`} onClick={this.showList}>
                <div className="nav-link dropdown-toggle btn" id={this.props.id} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.show} onClick={this.props.onClick}>
                    <i className={`fas ${this.props.icon} fa-fw`}></i>
                    <span className="badge badge-danger">{this.props.quantity}</span>
                </div>
                {
                    this.props.menus ?
                    <div className={`dropdown-menu dropdown-menu-right ${this.state.show? 'show': ''}`} aria-labelledby={this.props.id}>
                        {
                            [].concat(this.props.menus).map(menu => {
                                return (
                                    menu ? 
                                        menu.divider ?
                                            <div className="dropdown-divider"></div>
                                        :
                                            <span className="dropdown-item" onClick={menu.onClick}>{menu.label}</span>
                                    : 
                                        ''
                                )
                            })
                        }
                    </div> 
                    : ''
                }
            </li>
        )
    }
}

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
                <Link className="navbar-brand mr-1" to={this.props.href}>{this.props.title}</Link>
                {this.props.children}
            </nav>
        )
    }
}