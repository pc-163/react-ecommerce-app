import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="container-fluid">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <a className="navbar-brand mt-2 mt-lg-0">PC ADVENTURE</a>
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"> 
                                <NavLink to="/product" className="nav-link">Store</NavLink>
                            </li>
                            {  /* <li className="nav-item">
                            <NavLink to="todo" className="nav-link">Todo</NavLink>
                            </li>*/}
                            <li className="nav-item">
                            <NavLink to="profile" className="nav-link">My Profile</NavLink>
                               
                            </li>
                             {  /*
                            <li className="nav-item">
                            <NavLink to="caluculator" className="nav-link">Caluculator</NavLink>
                               
                            </li>*/}
                        </ul>

                    </div>

                    <div className="d-flex align-items-center">
                    <Link to="/cart" className="text-reset me-3">
                            <i className="fas fa-shopping-cart"></i>
                    </Link>

                        <div className="dropdown">
                            <a
                                className="text-reset me-3 dropdown-toggle hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-bell"></i>
                               
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">Some news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Another news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a
                                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuAvatar"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src={props.image}
                                    className="rounded-circle"
                                    height="25"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </nav>

        </>
    )
}

export default Header