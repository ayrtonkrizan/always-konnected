import React, { Component } from 'react';
import {Link} from 'react-router';
import PubSub from 'pubsub-js';

class SideItem extends Component {
    render() {
        return (
            <li className={`nav-item ${this.props.active?'active':''}`}>
                <Link className="nav-link" to={this.props.href}>
                    <i className={`fas fa-fw ${this.props.icon}`}></i>
                    <span>{this.props.label}</span>
                </Link>
            </li>
        )
    }
}

class SideList extends Component {
    constructor(){
        super();
        this.state = {show: false}
    }
    
    showList = e => {
        e.preventDefault();
        this.setState({show: !this.state.show})
    }

    render(){
        return(
            <li className={`nav-item dropdown ${this.state.show? 'show': ''}`} onClick={this.showList}>
                <a className="nav-link dropdown-toggle" href='/' id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.show}>
                    <i className={`fas fa-fw ${this.props.icon}`}></i>
                    <span>{this.props.label}</span>
                </a>
                <div className={`dropdown-menu ${this.state.show? 'show': ''}`} aria-labelledby="pagesDropdown">
                    {
                        [].concat(this.props.lista).map(item => item? <Link className="dropdown-item" to={item.href}>{item.label}</Link> : '')
                    }
                </div>
            </li>
        )
    }
}

export default class Sidebar extends Component {
    constructor(){
        super();
        this.state = {
            menus: [
                { key:'1', icon:'fa-tachometer-alt', label:'Dashboard', href:'/dashboard', active:'true'},
                { key:'2', icon:'fa-city', label:'Adminsitração', href:'/admin'},
                { key:'3', icon:'fa-boxes', label:'Cadastros', lista: [{label:'Cadastro de Item', href:'/item'}, {label:'Cadastro de PN', href:'#'}]},
                { key:'4', icon:'fa-cart-plus', label:'Compras', lista: [{label:'Pedido de Compra', href:'#'}]},
                { key:'6', icon:'fa-dolly', label:'Vendas', lista: [{label:'Pedido de Venda', href:'#'}]},
                { key:'7', icon:'fa-chart-line', label:'Relatórios', lista: [{label:'Analise de Vendas', href:'#'}, {label:'Analise de Compras', href:'#'}]}
            ],
            toggled: false
        };
    }

    componentDidMount(){
        PubSub.subscribe('toggle-sidebar', (topico, value)=> {
            this.setState({toggled: !this.state.toggled});
        });
    }  

    render() {
        return (
                <ul className={`sidebar navbar-nav ${this.state.toggled? 'toggled': ''}`}>
                    {
                        [].concat(this.state.menus).map(menu => !menu.lista? <SideItem {...menu}/> : <SideList {...menu}/>)
                    }    
                </ul>

        )
    }
}

