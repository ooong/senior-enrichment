import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import axios from 'axios'


const Navbar = () => {
    return (
        <div>
            <section>
                <h4 className="nav-item">
                    <NavLink to="./students">STUDENTS</NavLink>
                </h4>
            </section>
            <section>
                <h4 className="nav-item">
                    <NavLink to="./campuses">HOME</NavLink>
                </h4>
            </section>







        </div>
    )
}





export default Navbar;