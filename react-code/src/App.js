import React, { Component } from 'react';
import PubSub from 'pubsub-js';
//import {Link} from 'react-router';

import Navbar, { NavItem } from './components/Navbar';
import Sidebar from './components/Sidebar';
import MessageBox from './components/MessageBox';

// class  Footer extends Component{
//   render(){
//       return(
//           <footer className="sticky-footer">
//             <div className="container my-auto">
//               <div className="copyright text-center my-auto">
//                 <span>Copyright © Always Konnected 2019</span>
//               </div>
//             </div>
//           </footer>
//       )
//   }
// }


class App extends Component {
	constructor(){
        super();
        this.state = {
            userMenus: [
                {onClick:'', label:'Perfil'},
                {onClick:'', label:'Senha'},
                {divider:true},
                {onClick:'', label:'Logout'}
            ]
        };
    }

    toggleSidebar = (e) => {
        e.preventDefault();

        PubSub.publish("toggle-sidebar", {});
	}
	
	render() {
		return (
			<div id="page-top">
				<Navbar title="Always Konnected" href="/app">
					<button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" to="#" onClick={this.toggleSidebar}>
						<i className="fas fa-bars"></i>
					</button>
					<ul className="navbar-nav d-md ml-auto mr-0 mr-md-3 my-2 my-md-0">
						<NavItem id='shareAlert' icon='fa-share-alt' quantity='9+' />
						<NavItem id='messagesDropdown' icon='fa-envelope' quantity='7' />
						<NavItem id='userDropdown' icon='fa-user-circle' quantity='' menus={this.state.userMenus} />
					</ul>

				</Navbar>
				<div id="wrapper">
					<Sidebar />
					<div id="content-wrapper">
						<div className="container-fluid">
							{this.props.children}
						</div>
					</div>
				</div>
				<a className="scroll-to-top rounded" href="#page-top">
					<i className="fas fa-angle-up"></i>
				</a>
				<MessageBox message='Selecione "Sair" para encerrar sessão!!' title='Ready to leave?' />
			</div>
		);
	}
}

export default App;
