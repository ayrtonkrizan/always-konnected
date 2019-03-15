import React, { Component } from 'react';
import {Link} from 'react-router';

class NavBar extends Component {
    constructor() {
        super();
        this.state = { show: false, toogleNav: false }
    }

    showList = e => {
        e.preventDefault();
        this.setState({ show: !this.state.show })
    }


    render() {
        return (
            <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${this.props.toogleNav ? 'navbar-shrink' : ''}`} id="mainNav">
                <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="#page-top">Always Konnected</Link>
                    <button className={`navbar-toggler navbar-toggler-right ${!this.state.show ? 'collapsed' : ''}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded={this.state.show} aria-label="Toggle navigation" onClick={this.showList}>
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className={`collapse navbar-collapse ${this.state.show ? 'show' : ''}`} id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="#features">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="#contact">Contatos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default class Landing extends Component {
    constructor() {
        super();
        this.state = { toogleNav: false }
    }

    navbarCollapse = (e) => {
        if (window.scrollY >= 100 && this.state.toogleNav === false) {
            this.setState({ toogleNav: true });
        } else if (window.scrollY <= 100 && this.state.toogleNav === true) {
            this.setState({ toogleNav: false });
        }
    }
    render() {
        return (
            <div id="page-top" onWheel={this.navbarCollapse}>
                <NavBar toogleNav={this.state.toogleNav} />
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-7 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-5">Always Konnected é um Web App focado em integrar o mundo com seu SAP Business One!</h1>
                                    <Link to="register" className="btn btn-outline btn-xl js-scroll-trigger">Registre-se Agora!</Link>
                                </div>
                            </div>
                            <div className="col-lg-5 my-auto">
                                <div className="device-container">
                                    <div className="device-mockup iphone6_plus portrait white">
                                        <div className="device">
                                            <div className="screen">

                                                <img src="./img/AK_Index.jpeg" className="img-fluid" alt="" />
                                                <i className="icon-screen-smartphone text-land-primary"></i>
                                            </div>
                                            <div className="button">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="features" id="features">
                    <div className="container">
                        <div className="section-heading text-center">
                            <h2>Economize na licença e ganhe tempo!</h2>
                            <p className="text-muted">veja o que você pode fazer em nosso app</p>
                            <hr></hr>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 my-auto">
                                <div className="device-container">
                                    <div className="device-mockup iphone6_plus portrait white">
                                        <div className="device">
                                            <div className="screen">

                                                <img src="img/AK_Index.jpeg" className="img-fluid" alt="" />
                                            </div>
                                            <div className="button">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 my-auto">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className="icon-screen-smartphone text-land-primary"></i>
                                                <h3>Mobilidade</h3>
                                                <p className="text-muted">Layout amigavel no PC, Tablet e Smartphone Android ou IOS!</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className="icon-present text-land-primary"></i>
                                                <h3>Economia</h3>
                                                <p className="text-muted">Economize na quantidade de licença para inputar dados no ERP!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className="icon-magnet text-land-primary"></i>
                                                <h3>Integrado</h3>
                                                <p className="text-muted">Integrado com a API do correios, banco-central e outras para facilitar o trabalho!</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className="icon-settings text-land-primary"></i>
                                                <h3>Customizável</h3>
                                                <p className="text-muted">Facilmente Customizável por empresa ou usuário!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta">
                    <div className="cta-content">
                        <div className="container">
                            <h2>Para de esperar!<br />Registre sua empresa que entramos em contato!</h2>
                            <Link to="register.html" className="btn btn-outline btn-xl js-scroll-trigger">Vamos Começar!</Link>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </section>

                <section className="contact bg-warning" id="contact">
                    <div className="container">
                        <h2>We
          <i className="fas fa-heart"></i>
                            new friends!</h2>
                        <ul className="list-inline list-social">
                            <li className="list-inline-item social-twitter">
                                <Link to="#">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item social-facebook">
                                <Link to="#">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item social-google-plus">
                                <Link to="#">
                                    <i className="fab fa-google-plus-g"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <footer>
                    <div className="container">
                        <p>&copy; Always Konnected 2019. All Rights Reserved.</p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <Link to="#">Privacy</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#">Terms</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>

        );
    }
}
