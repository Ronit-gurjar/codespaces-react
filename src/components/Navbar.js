import { Component } from "react";
import "./NavbarStyle.css"
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <img className="tedx-logo" src="../public/logo-white.png" alt="logo"/>
                <ul className="navbar-menu">
                {MenuItems.map((item,index) =>{
                    return(<li key={index}>
                        <a className={item.cName} href={item.url}>{item.title}</a>
                    </li>);
                })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;