import React from 'react';

export default (props) =>{
  return(
      <header>
          <nav className="navbar bg-warning navbar-light navbar-expand-md fixed-top">
              <div className="container">
                  <a href="/home" className="navbar-brand font-weight-bold text-uppercase">Blood Donate</a>
                
                  <button type="button" className="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbarNav">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ml-auto">
                        {
                            props.navItems.map(item => (
                                <li className="nav-item">
                                    <a href={item.path} className="nav-link text-capitalize text-dark">{item.label}</a>
                                </li>
                            ))
                        }                
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
  );
};