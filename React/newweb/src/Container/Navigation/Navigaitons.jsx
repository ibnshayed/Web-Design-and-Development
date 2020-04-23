import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min';
import 'bootstrap/js/src/collapse';
const Navigaitons = () => {
    return (
        <header>
            <nav className={"navbar bg-warning navbar-light navbar-expand-md"}>
                <div className="container">
                    <a href="#" className="navbar-brand">EMRAN</a>
                    <button className={"navbar-toggler navbar-toggler-right"}
                        type={"button"} data-toggle={"collapse"} data-target={"#navbarNav"}>
                        <span className={"navbar-toggler-icon"}></span>
                    </button>

                    <div className={"collapse navbar-collapse"} id={"navbarNav"}>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">about</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Conact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navigaitons;