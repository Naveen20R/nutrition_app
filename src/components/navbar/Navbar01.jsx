import React from 'react';
import "@/styles/navbarStyle.css";

function Navbar01() {
    return (
        <div className="container-fluid p-0 m-0 py-2  navbar-head">
            <div className="container-fluid  d-none d-lg-block navbar-info">
                <div className="container my-2">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="d-flex flex-row justify-content-center justify-content-md-start align-items-center">
                                <span className=''> We’re 24/7 Hours Service Provider! </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="">
                                <ul className='header-info-links d-flex flex-row justify-content-center justify-content-md-end align-items-center gap-3'>
                                    <li className='d-flex justify-content-center align-items-center gap-3'>
                                        <i class="fa-solid fa-envelope"></i>
                                        <span>info@example.com</span>
                                    </li>
                                    <li className='d-flex justify-content-center align-items-center gap-3'>
                                        <i class="fa-solid fa-phone"></i>
                                        <span>+1(888)1234-5678</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

                <nav className="navbar main-navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#">
                        <img src="/images/footer-logo-1.png" alt="logo img" className="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="container">
                            <div className="row">
                                {/* <div className="col-3 col-md-3">
                                <img src="/images/footer-logo-1.png" alt="logo img" className="logo" />
                            </div> */}
                                <div className="col-12 mt-4 p-0 mt-md-0 mx-md-auto col-md-9">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Home
                                                {/* <span><i className="fa-solid px-1 fa-angle-down"></i></span> */}
                                            </a>
                                            <div className="dropdown-menu p-0 navbar-drops rounded-0" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item py-2 px-4" href="#">Action</a>
                                                <a className="dropdown-item py-2 px-4" href="#">Another action</a>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="about">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/services">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar01;
