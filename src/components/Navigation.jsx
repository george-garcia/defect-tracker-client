import React from 'react';
import {Link} from "react-router-dom";

const Navigation = (props) => {

    return (
        <div className="section-header">
            <div className="header">
                <form action="#" className="search">
                    <input type="text" placeholder=" Search..." className="search__input"/>
                </form>
                <button className="header__login">Login</button>
            </div>
            <div className="content">
                <nav className="sidebar">
                    <ul className="side-nav">
                        <li className="side-nav__item">
                            <a href="" className="side-nav__link">
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <Link to={"/defects/show"} className="side-nav__link">
                                <span>Show Defects</span>
                            </Link>
                        </li>
                        <li className="side-nav__item">
                            <Link to={"/defects/new"} className="side-nav__link">
                                <span>New Defect</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <main className="content-view">
                    {props.content}
                </main>
            </div>
        </div>
    );
    
};

export default Navigation;