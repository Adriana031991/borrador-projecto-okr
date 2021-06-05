import React from 'react'
import { Link } from 'react-router-dom'
import NavbarSofKa from "../components/Navbar";
import ResponsiveDrawer from "../components/Sidebar";

const HomePage = () => (
    <section>
        <div className="container">
            <div className = "row">
                <div className = "col-md"><NavbarSofKa /></div>
            </div>
            <div className = "row">
                <div className = "col-md-2"><ResponsiveDrawer/></div>
                <div className = "col-md-10"></div>
            </div>
        </div>
    </section>
)
export default HomePage