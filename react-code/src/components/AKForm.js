import React, { Component } from 'react';
//import Datatable from './Datatable';
//import Iconcard from './Iconcard';
import NavBar from './Navbar';

export class CustomInput extends Component{
    render(){
        return(
            <div class="form-group">
                <label for={this.props.id}>{this.props.label}</label>
                <input type={this.props.type} class="form-control" id={this.props.id} placeholder={this.props.placeholder} aria-describedby={`${this.props.id}Help`}/>
                <small id={`${this.props.id}Help`} class="form-text text-muted">{this.props.extraInfo}</small>
            </div>
        )
    }
}

export class TabCollapse extends Component {
    constructor() {
        super();
        this.state = { show: false, class: '' }
    }

    showContent = e => {
        e.preventDefault();
        //this.setState({ show: !this.state.show })
        if(this.state.show){
            // this.setState({show:false, class:'show collapsing'})
            // setTimeout(()=> this.setState({show:false, class:''}), 1000);
            this.setState({show:false, class:''})
        }
        else{
            setTimeout(()=> this.setState({show:true, class:'show'}), 500);
        }
    }

    render() {
        return (
            <div class="card">
                <button class="card-header" id="headingOne" data-toggle="collapse" aria-expanded={this.show} aria-controls={`collapse-${this.props.key}`} onClick={this.showContent}>
                    <h5 class="mb-0">
                        {this.props.title}
                    </h5>
                </button>

                <div id="collapseOne" class={`collapse ${this.state.class}`} aria-labelledby={`heading-${this.props.key}`}>
                    <div class="card-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}


class Header extends Component {
    render() {
        return (
            <div className="card-header">
                <div class="ak-toolbar btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="input-group">
                        <h3>{this.props.title}</h3>
                    </div>

                    <div class="btn-group" role="group" aria-label="Second group">
                        <button type="button" class="btn btn-secondary">
                            <i className={`fas fa-fw fa-plus-circle`}></i>
                        </button>
                        <button type="button" class="btn btn-secondary">
                            <i className={`fas fa-fw fa-search`}></i>
                        </button>
                    </div>

                    <div class="btn-group" role="group" aria-label="First group">
                        <button type="button" class="btn btn-secondary">
                            <i className={`fas fa-fw fa-angle-double-left`}></i>
                        </button>
                        <button type="button" class="btn btn-secondary">
                            <i className={`fas fa-fw fa-angle-left`}></i>
                        </button>
                        <button type="button" class="btn btn-secondary">
                            <i className={`fas fa-fw fa-angle-right`}></i>
                        </button>
                        <button type="button" class="btn btn-secondary">
                            <i className={`fas fa-fw fa-angle-double-right`}></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default class AKForm extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div class= "ak-toolbar card">
                <Header title={this.props.title}/>
                <div class="card-body">
                    <form>
                        {this.props.children}
                    </form>
                </div>
            </div>
        )
    }
}